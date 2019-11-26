/* jshint -W041, -W083 */
/* jslint browser: true*/
/* global cordova,StatusBar,angular,console */

// controller for Monitor View
// refer to comments in EventCtrl for the modal stuff. They are almost the same

angular.module('zmApp.controllers')
  .controller('zmApp.MonitorCtrl', ['$ionicPopup', 'zm', '$scope', 'NVR',  '$ionicSideMenuDelegate', '$ionicLoading', '$ionicModal', '$state', '$http', '$rootScope', '$timeout', '$ionicHistory', '$ionicPlatform', '$translate', '$q',
    function ($ionicPopup, zm, $scope, NVR, $ionicSideMenuDelegate, $ionicLoading, $ionicModal, $state, $http, $rootScope, $timeout, $ionicHistory, $ionicPlatform, $translate, $q) {


      var loginData;
      $scope.monitorLoadStatus = "...";

      // --------------------------------------------------------
      // Handling of back button in case modal is open should
      // close the modal
      // --------------------------------------------------------                               

      $ionicPlatform.registerBackButtonAction(function (e) {
        e.preventDefault();
        if ($scope.modal != undefined && $scope.modal.isShown()) {
          // switch off awake, as liveview is finished
          NVR.debug("Modal is open, closing it");
          NVR.setAwake(false);
          $scope.modal.remove();
        } else {
          NVR.debug("Modal is closed, so toggling or exiting");
          if (!$ionicSideMenuDelegate.isOpenLeft()) {
            $ionicSideMenuDelegate.toggleLeft();

          } else {
            navigator.app.exitApp();
          }

        }

      }, 1000);

      $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };

      

      //----------------------------------------------------------------
      // Alarm notification handling
      //----------------------------------------------------------------
      $scope.handleAlarms = function () {
       
        //$rootScope.isAlarm = true;
        $rootScope.isAlarm = !$rootScope.isAlarm;
        if (!$rootScope.isAlarm) {
          $rootScope.alarmCount = "0";
          $ionicHistory.nextViewOptions({
            disableBack: true
          });

          $state.go("app.events", {
            "id": 0,
            "playEvent": false
          });
          return;
        }
      };

      $scope.gotoEvents = function (mid) {
        $state.go("app.events", {
          "id": mid,
          "playEvent": false
        });
        return;
      };

      function noop() {}
      //-----------------------------------------------------------------------
      // This function takes care of changing monitor parameters
      // For now, I've only limited it to enable/disable and change monitor mode
      // and changing monitor function
      //-----------------------------------------------------------------------
      $scope.changeConfig = function (monitorName, monitorId, enabled, func) {
        var checked = false;

        if (monitorName == 'All') {
          monitorName = $translate.instant('kAll');
        }

        //console.log("called with " + monitorId + ":" + enabled + ":" + func);
        if (enabled == '1') checked = true;

        //if monitorId is not specified, all monitors will be changed 
        var monitorsIds = [];
        if (monitorId == '') {
          for (var i = 0; i < $scope.monitors.length; i++) {
            monitorsIds[i] = $scope.monitors[i].Monitor.Id;
          }
        } else {
          monitorsIds[0] = monitorId;
        }

        $scope.monFunctions = [{
            text: $translate.instant('kMonModect'),
            value: "Modect"
          },
          {
            text: $translate.instant('kMonMocord'),
            value: "Mocord"
          },
          {
            text: $translate.instant('kMonRecord'),
            value: "Record"
          },
          {
            text: $translate.instant('kMonNodect'),
            value: "Nodect"
          },
          {
            text: $translate.instant('kMonMonitor'),
            value: "Monitor"
          },
          {
            text: $translate.instant('kMonNone'),
            value: "None"
          }
        ];

        $scope.monfunc = {
          mymonitorsIds: monitorsIds,
          myfunc: func,
          myenabled: checked,
          myfailedIds: [],
          mypromises: []
        };

        $rootScope.zmPopup = $ionicPopup.show({
          scope: $scope,
          template: '<ion-toggle ng-model="monfunc.myenabled"   toggle-class="toggle-calm">Enabled</ion-toggle><ion-radio-fix ng-repeat="item in monFunctions" ng-value="item.value" ng-model="monfunc.myfunc"> {{item.text}} </ion-radio-fix>',

          title: $translate.instant('kChangeSettingsFor') + ' ' + monitorName,

          buttons: [{
              text: $translate.instant('kButtonCancel'),

            },
            {
              text: $translate.instant('kButtonSave'),
              onTap: function (e) {
                $scope.monfunc.mymonitorsIds.forEach(function (item, index) {
                  NVR.debug("MonitorCtrl:changeConfig selection:" + $scope.monfunc.myenabled +
                    $scope.monfunc.myfunc);
                  var loginData = NVR.getLogin();
                  var apiRestart = loginData.apiurl + "/states/change/restart.json?"+$rootScope.authSession;
                  var apiMon = loginData.apiurl + "/monitors/" + item + ".json?"+$rootScope.authSession;

                  NVR.debug("MonitorCtrl: URLs for changeConfig save:" + apiMon);

                  var isEnabled = "";
                  isEnabled = ($scope.monfunc.myenabled == true) ? '1' : '0';

                  $ionicLoading.show({
                    template: $translate.instant('kApplyingChanges') + "...",
                    noBackdrop: true,
                    duration: zm.largeHttpTimeout,
                  });

                  var httpPromise = $http({
                      url: apiMon,
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': '*/*',
                      },
                      transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                          str.push(encodeURIComponent(p) + "=" +
                            encodeURIComponent(obj[p]));
                        var foo = str.join("&");
                        // console.log("****RETURNING " + foo);
                        NVR.debug("MonitorCtrl: parmeters constructed: " + foo);
                        return foo;
                      },
                      data: {
                        'Monitor[Function]': $scope.monfunc.myfunc,
                        'Monitor[Enabled]': isEnabled,
                      }

                    })
                    .then(function () {
                        NVR.debug("MonitorCtrl: Not restarting ZM - Make sure you have the patch installed in MonitorsController.php or this won't work");
                      },
                      function (data, status, headers, config) {
                        NVR.debug("MonitorCtrl: Error changing monitor " + JSON.stringify(data));
                        $scope.monfunc.myfailedIds.push(item);
                      });

                  $scope.monfunc.mypromises.push(httpPromise);
                });

                $q.all($scope.monfunc.mypromises).then(function (e) {
                  $ionicLoading.hide();
                  // if there's a failed ID, an error has occurred
                  if ($scope.monfunc.myfailedIds.length != 0) {
                    $ionicLoading.show({
                      template: $translate.instant('kErrorChangingMonitors') + ". Monitor IDs : " + $scope.monfunc.myfailedIds.toString(),
                      noBackdrop: true,
                      duration: 3000,
                    });
                  } else {
                    // I am not restarting ZM after monitor change
                    /* NVR.debug ("MonitorCtrl: Restarting ZM");
                    $ionicLoading.show({
                        template: "Successfully changed Monitor. Please wait, restarting ZoneMinder...",
                        noBackdrop: true,
                        duration: zm.largeHttpTimeout,
                    });
                    $http.post(apiRestart)
                        .then(function (success) {
                            $ionicLoading.hide();
                            var refresh = NVR.getMonitors(1);
                            refresh.then(function (data) {
                                $scope.monitors = data;
                                $scope.$broadcast('scroll.refreshComplete');
                            });

                         },
                         function (error) {
                             $ionicLoading.hide();

                         });*/
                    doRefresh();
                  }
                })
                .catch (noop);
              }

            },
          ]
        });

      };

      // same logic as EventCtrl.js
      $scope.finishedLoadingImage = function () {
        // console.log("***Monitor image FINISHED Loading***");
        $ionicLoading.hide();
      };

      $scope.$on('$ionicView.loaded', function () {
        //  console.log("**VIEW ** Monitor Ctrl Loaded");
      });

      //-------------------------------------------------------------------------
      // Lets make sure we set screen dim properly as we enter
      // The problem is we enter other states before we leave previous states
      // from a callback perspective in ionic, so we really can't predictably
      // reset power state on exit as if it is called after we enter another
      // state, that effectively overwrites current view power management needs
      //------------------------------------------------------------------------

      $scope.$on('$ionicView.beforeEnter', function() {

        $scope.$on ( "process-push", function () {
          NVR.debug (">> MonitorCtrl: push handler");
          var s = NVR.evaluateTappedNotification();
          NVR.debug("tapped Notification evaluation:"+ JSON.stringify(s));
          $ionicHistory.nextViewOptions({
            disableAnimate:true,
            disableBack: true
          });
          $state.go(s[0],s[1],s[2]);
        });
      });
      $scope.$on('$ionicView.enter', function () {
        // console.log("**VIEW ** Monitor Ctrl Entered");
        NVR.setAwake(false);
        $ionicSideMenuDelegate.canDragContent(true);
        $scope.areImagesLoading = true;
      });

      $scope.$on('$ionicView.afterEnter', function () {
        // console.log("**VIEW ** Monitor Ctrl Entered");

        NVR.debug ("Monitor Control afterEnter");
        $scope.monitors = [];
        $scope.monitorLoadStatus = $translate.instant ('kPleaseWait')+'...';
   

        //console.log (">>>>>>>>>>>> MONITOR CTRL " + JSON.stringify($scope.monitors));

       

        loginData = NVR.getLogin();
        monitorStateCheck();
        //console.log("Setting Awake to " + NVR.getKeepAwake());
        NVR.setAwake(NVR.getKeepAwake());
        // Now lets see if we need to load live screen

        // $rootScope.tappedMid = 1;
        if ($rootScope.tappedMid != 0) {
          NVR.log("Notification tapped, we need to go to monitor " + $rootScope.tappedMid);

          var tm = $rootScope.tappedMid;
          $rootScope.tappedMid = 0;
          var monitem;

          NVR.getMonitors(0)
          .then ( function (data) {
            $scope.monitors = data;
            for (var m = 0; m < $scope.monitors.length; m++) {
              if ($scope.monitors[m].Monitor.Id == tm) {
                monitem = $scope.monitors[m];
                break;
              }
            }
            openModal(monitem.Monitor.Id, monitem.Monitor.Controllable, monitem.Monitor.ControlId, monitem.Monitor.connKey, monitem);
          });
          

          
        }

      });

      $scope.$on('$ionicView.leave', function () {
        // console.log("**VIEW ** Monitor Ctrl Left, force removing modal");
        if ($scope.modal) $scope.modal.remove();
      });

      $scope.$on('$ionicView.unloaded', function () {
        // console.log("**VIEW ** Monitor Ctrl Unloaded");
      });

      $scope.openModal = function (mid, controllable, controlid, connKey, monitor) {

        openModal(mid, controllable, controlid, connKey, monitor);

      };

      function openModal(mid, controllable, controlid, connKey, monitor) {
        NVR.debug("MonitorCtrl:Open Monitor Modal with monitor Id=" + mid +
          " and Controllable:" + controllable + " with control ID:" + controlid);

        $scope.controlURL = monitor.Monitor.controlURL;
        $scope.monitor = monitor;
        //console.log (">>>>>>>>>>>> MONITOR CRL " + $scope.monitor.
        $scope.monitorId = mid;
        $scope.monitorName = NVR.getMonitorName(mid);
        $scope.LoginData = NVR.getLogin();
        $scope.rand = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
        $scope.refMonitor = monitor;
        NVR.log("Monitor Orientation is: " + $scope.orientation);
        $rootScope.rand = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;

        $scope.showPTZ = false;
        $scope.monitorId = mid;
        $scope.monitorName = NVR.getMonitorName(mid);
        $scope.controlid = controlid;

        $scope.LoginData = NVR.getLogin();
        $rootScope.modalRand = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;

        $scope.ptzMoveCommand = "";
        $scope.ptzStopCommand = "";

        $scope.zoomInCommand = "";
        $scope.zoomOutCommand = "";
        $scope.zoomStopCommand = "zoomStop";
        $scope.canZoom = false;

        $scope.presetOn = false;


        $scope.isControllable = controllable;

        $rootScope.modalRand = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;

        // This is a modal to show the monitor footage
        // We need to switch to always awake if set so the feed doesn't get interrupted
        NVR.setAwake(NVR.getKeepAwake());

        $ionicModal.fromTemplateUrl('templates/monitors-modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
          })
          .then(function (modal) {
            $scope.modal = modal;
            $scope.isModalActive = true;
            $scope.modal.show();
          });

      }

      $scope.closeModal = function () {
        // console.log("Close & Destroy Monitor Modal");

        // stop networking -nph-zms keeps sucking data

        // switch off awake, as liveview is finished
        NVR.setAwake(false);
        $scope.modal.remove();
        $timeout(function () {
          NVR.log("MonitorCtrl:Stopping network pull...");
          if (NVR.isForceNetworkStop()) NVR.stopNetwork("MonitorCtrl-closeModal");
        }, 300);

      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function () {
        //console.log("Destroy Monitor Modal");
        if ($scope.modal) $scope.modal.remove();
      });

      //-----------------------------------------------------------------------
      // Controller Main
      //-----------------------------------------------------------------------

      function monitorStateCheck() {
        
       // console.log ("Checking monitors");
        var ld = NVR.getLogin();
        // force get for latest status of monitors if av.
       NVR.getMonitors(1)
        .then (function (data) {
         
          $scope.monitors = data;

          if (!$scope.monitors.length) {
            $scope.monitorLoadStatus = $translate.instant ('kNoMonitors');
          }

          if (!$scope.monitors[0].Monitor_Status ) {
            NVR.debug ("no Monitor_Status found reverting to daemonCheck...");
            forceDaemonCheck();
          }
          else {
            NVR.debug ("reporting status of monitors from multi-server API");
            processMonitorStatus();
          }

        },
        function (err) {
          NVR.debug ("Monitor fetch error, reverting to daemonCheck...");
          $scope.monitorLoadStatus = $translate.instant ('kNoMonitors');
          forceDaemonCheck();
        });
        
      }

      function processMonitorStatus () {

        //array('Unknown','NotRunning','Running','NoSignal','Signal'),


       // console.log (JSON.stringify($scope.monitors));
        for (var j=0; j < $scope.monitors.length; j++) {

          if ($scope.monitors[j].Monitor_Status.Status == 'Connected') {
            $scope.monitors[j].Monitor.isRunning = "true";
            $scope.monitors[j].Monitor.color = zm.monitorRunningColor;
            $scope.monitors[j].Monitor.char = "ion-checkmark-circled";
            $scope.monitors[j].Monitor.isRunningText = $scope.monitors[j].Monitor_Status.Status;
          }
          else {
            $scope.monitors[j].Monitor.isRunning = "false";
            $scope.monitors[j].Monitor.color = zm.monitorNotRunningColor;
            $scope.monitors[j].Monitor.char = "ion-close-circled";
            $scope.monitors[j].Monitor.isRunningText = $scope.monitors[j].Monitor_Status.Status;
          }
          
        }

      }

      function forceDaemonCheck() {
        var apiMonCheck;

        $scope.loginData = NVR.getLogin();

        // The status is provided by zmdc.pl
        // "not running", "pending", "running since", "Unable to connect"
        var i;
        for (i = 0; i < $scope.monitors.length; i++) {
          (function (j) {
            $scope.monitors[j].Monitor.isRunningText = "...";
            $scope.monitors[j].Monitor.isRunning = "...";
            $scope.monitors[j].Monitor.color = zm.monitorCheckingColor;
            $scope.monitors[j].Monitor.char = "ion-help-circled";
            apiMonCheck = $scope.loginData.apiurl + "/monitors/daemonStatus/id:" + $scope.monitors[j].Monitor.Id + "/daemon:zmc.json?"+$rootScope.authSession;

           
            NVR.debug("MonitorCtrl:monitorStateCheck: " + apiMonCheck);
            //console.log("**** ZMC CHECK " + apiMonCheck);
            $http.get(apiMonCheck)
              .then(function (data) {
                  data = data.data;
                  NVR.debug("MonitorCtrl: monitor check state returned: " + JSON.stringify(data));
                  if (data.statustext.indexOf("not running") > -1) {
                    $scope.monitors[j].Monitor.isRunning = "false";
                    $scope.monitors[j].Monitor.color = zm.monitorNotRunningColor;
                    $scope.monitors[j].Monitor.char = "ion-close-circled";
                  } else if (data.statustext.indexOf("pending") > -1) {
                    $scope.monitors[j].Monitor.isRunning = "pending";
                    $scope.monitors[j].Monitor.color = zm.monitorPendingColor;
                  } else if (data.statustext.indexOf("running since") > -1) {
                    $scope.monitors[j].Monitor.isRunning = "true";
                    $scope.monitors[j].Monitor.color = zm.monitorRunningColor;
                    $scope.monitors[j].Monitor.char = "ion-checkmark-circled";
                  } else if (data.statustext.indexOf("Unable to connect") > -1) {
                    $scope.monitors[j].Monitor.isRunning = "false";
                    $scope.monitors[j].Monitor.color = zm.monitorNotRunningColor;
                    $scope.monitors[j].Monitor.char = "ion-close-circled";
                  }

                  $scope.monitors[j].Monitor.isRunningText = data.statustext;
                },
                function (data) {
                  NVR.debug("MonitorCtrl: Error->monitor check state returned: " +
                    JSON.stringify(data));
                  NVR.displayBanner('error', [$translate.instant('kErrorRetrievingState'), $translate.instant('kPleaseTryAgain')]);
                  $scope.monitors[j].Monitor.isRunning = "error";
                  $scope.monitors[j].Monitor.color = zm.monitorErrorColor;
                  $scope.monitors[j].Monitor.char = "ion-help-circled";
                });

          })(i);
        }
      }

      function doRefresh() {
        $scope.monitors = [];

        var refresh = NVR.getMonitors(1);

        refresh.then(function (data) {
          $scope.monitors = data;
          monitorStateCheck();
          $scope.$broadcast('scroll.refreshComplete');
        });
      }

      $scope.doRefresh = function () {
        //console.log("***Pull to Refresh");
        doRefresh();

      };

    }
  ]);

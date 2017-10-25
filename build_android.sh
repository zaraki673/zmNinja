#!/bin/bash

# App signining credentials in this file
NINJAKEYSTORE=~/Desktop/zmNinja.keystore

if [ ! -f "$NINJAKEYSTORE" ]; then
        echo "zmNinja keystore not found"
        exit
fi

mkdir release_files
rm -f release_files/*

# no arguments - build both
# 1 == build crosswalk only
# 2 == build native only
BUILD_MODE="all"
if [ "$1" = "1" ]; then
        BUILD_MODE="xwalk"
        echo "only building crosswalk"
fi
        
if [ "$1" = "2" ]; then
        BUILD_MODE="native"
        echo "only building native view (5+)"
fi

############ Crosswalk build ####################################
if [ "$BUILD_MODE" = "xwalk" ] || [ "$BUILD_MODE" = "all" ]; then

    echo "Building Release mode for Xwalk android..."
    echo "--------------------------------------------"
    echo "Removing android and re-adding..."
    cordova platform remove android
    cordova platform add android
    cordova plugin remove cordova-plugin-crosswalk-webview
    echo "Adding crosswalk..."
    #cordova plugin add cordova-plugin-crosswalk-webview
    cordova plugin add cordova-plugin-crosswalk-webview@2.2.0  --variable XWALK_MODE="lite" --variable "XWALK_VERSION"="17.46.459.1"
    #ionic plugin add cordova-plugin-crosswalk-webview 
    # crosswalk handles SSL certificate handling in a different way
    # need to switch plugins
    echo "Adding crosswalk cert plugin..."
    cordova plugin remove cordova-plugin-certificates
    cordova plugin add https://github.com/danjarvis/cordova-plugin-crosswalk-certificate
    cp "$NINJAKEYSTORE" platforms/android/
    cordova build android --release  -- --targetSdkVersion=23
    
    # copy builds to my release directory
    cp platforms/android/build/outputs/apk/android-x86-release-unsigned.apk release_files/
    cp platforms/android/build/outputs/apk/android-armv7-release-unsigned.apk release_files/
    echo "Copied files to release_files"

    # sign them
    cd release_files/
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../platforms/android/zmNinja.keystore android-armv7-release-unsigned.apk zmNinja
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../platforms/android/zmNinja.keystore android-x86-release-unsigned.apk zmNinja
    ~/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 android-x86-release-unsigned.apk zmNinja-x86-pre5.apk
    ~/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 android-armv7-release-unsigned.apk zmNinja-arm-pre5.apk
    rm -f android-x86-release-unsigned.apk android-armv7-release-unsigned.apk
    cd ..
fi


############ Native web view build ###############################
if [ "$BUILD_MODE" = "native" ] || [ "$BUILD_MODE" = "all" ]; then

    echo "Building Release mode for android 5+..."
    echo "--------------------------------------------"
    APPVER=`cat config.xml | grep "widget " | sed 's/.* version=\"\([^\"]*\)\" xmlns.*/\1/'`
    a=( ${APPVER//./ } )
    vcode="$(((a[0]*10000+a[1]*100+a[2])))9"
    
    echo "Removing android and re-adding..."
    cordova platform remove android
    cordova platform add android

   #clean up past build stuff
    echo "Adding default browser..."
    cordova plugin remove cordova-plugin-crosswalk-webview

    # use the right plugin for SSL certificate mgmt
    cordova plugin remove cordova-plugin-crosswalk-certificate
    cordova plugin add https://github.com/hypery2k/cordova-certificate-plugin
    #ionic platform remove android
    #ionic platform add android
    cp "$NINJAKEYSTORE" platforms/android/

    # Make sure native builds are only deployed in devices < Android 5
    cordova build android --release -- --minSdkVersion=21 --versionCode=${vcode}

    # copy build to release folder and sign
    cp platforms/android/build/outputs/apk/android-release-unsigned.apk release_files/
    echo "Copied files to release_files"

    cd release_files/
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ../platforms/android/zmNinja.keystore android-release-unsigned.apk zmNinja
    ~/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 android-release-unsigned.apk zmNinja.apk
    rm -f android-release-unsigned.apk 
    cd ..
fi

# Do a phone perm check

    ./checkperms.sh release_files/zmNinja.apk
    echo "*** Phone State Check:"
    ./checkperms.sh release_files/zmNinja.apk | grep PHONE_STATE


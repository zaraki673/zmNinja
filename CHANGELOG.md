# Change Log

## [Unreleased](https://github.com/pliablepixels/zmNinja/tree/HEAD)

[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.503...HEAD)

**Fixed bugs:**

- 1.2.503 broke timeline in Android & Desktop [\#549](https://github.com/pliablepixels/zmNinja/issues/549)

**Closed issues:**

- System edit privileges required to permit non-admin to change camera mode [\#548](https://github.com/pliablepixels/zmNinja/issues/548)
- Support for multiple screens \(desktop\) [\#543](https://github.com/pliablepixels/zmNinja/issues/543)

## [v1.2.503](https://github.com/pliablepixels/zmNinja/tree/v1.2.503) (2017-10-01)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.44...v1.2.503)

**Implemented enhancements:**

- Allow running multiple, different instances of zmNinja \(desktop\) [\#542](https://github.com/pliablepixels/zmNinja/issues/542)
- Abstract zmNinja out from ZM specifics [\#318](https://github.com/pliablepixels/zmNinja/issues/318)

**Fixed bugs:**

- German language - JSON corrupted -affects 1.2.500 [\#545](https://github.com/pliablepixels/zmNinja/issues/545)

**Closed issues:**

- make it easier to make desktop builds [\#541](https://github.com/pliablepixels/zmNinja/issues/541)
- Explore upgrading electron wrapper to solve white screen issues [\#539](https://github.com/pliablepixels/zmNinja/issues/539)
- All monitors view refresh rate 0 or very low on my PC/Windows installation of ZMNinja [\#527](https://github.com/pliablepixels/zmNinja/issues/527)

**Merged pull requests:**

- Email not configured [\#544](https://github.com/pliablepixels/zmNinja/pull/544) ([florie1706](https://github.com/florie1706))
- kEmailNotConfigured [\#540](https://github.com/pliablepixels/zmNinja/pull/540) ([maymaymay](https://github.com/maymaymay))

## [v1.2.44](https://github.com/pliablepixels/zmNinja/tree/v1.2.44) (2017-09-25)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.41...v1.2.44)

**Implemented enhancements:**

- Montage Cycle - customize timer [\#530](https://github.com/pliablepixels/zmNinja/issues/530)
- New language: Hungarian/Magyar [\#529](https://github.com/pliablepixels/zmNinja/issues/529)

**Fixed bugs:**

- zmNinja incorrectly reports invalid API [\#537](https://github.com/pliablepixels/zmNinja/issues/537)
- Crosswalk build no longer works on newer android phones [\#536](https://github.com/pliablepixels/zmNinja/issues/536)
- Fixes for IOS11 and iPhone X [\#534](https://github.com/pliablepixels/zmNinja/issues/534)
- Many presets in live view results in the screen overflowing [\#517](https://github.com/pliablepixels/zmNinja/issues/517)

**Closed issues:**

- Mac screen sleep issue [\#538](https://github.com/pliablepixels/zmNinja/issues/538)
- Update code base to work with new ionic dev env [\#535](https://github.com/pliablepixels/zmNinja/issues/535)
- zmNinja fails against ZM 1.31.1  [\#533](https://github.com/pliablepixels/zmNinja/issues/533)
- 1.30.4 API not connecting [\#523](https://github.com/pliablepixels/zmNinja/issues/523)
- Does 1.3 work with zmninja [\#522](https://github.com/pliablepixels/zmNinja/issues/522)
- Feature request: possibility to select a run state from zmNinja [\#520](https://github.com/pliablepixels/zmNinja/issues/520)
- Stability problem on zmNinja on Windows 10 x64 after adding a fourth monitor [\#519](https://github.com/pliablepixels/zmNinja/issues/519)
- fit/fill screen option issue [\#514](https://github.com/pliablepixels/zmNinja/issues/514)
- Any chance of A10 Allwinder cpu suport? [\#513](https://github.com/pliablepixels/zmNinja/issues/513)

**Merged pull requests:**

- New string kCycleMontageInterval [\#532](https://github.com/pliablepixels/zmNinja/pull/532) ([florie1706](https://github.com/florie1706))
-  \#530 - allow you to customize timer for montage cycle [\#531](https://github.com/pliablepixels/zmNinja/pull/531) ([maymaymay](https://github.com/maymaymay))
- update language spanish language with new keys [\#525](https://github.com/pliablepixels/zmNinja/pull/525) ([fxrnando](https://github.com/fxrnando))
- Create CODE\_OF\_CONDUCT.md [\#524](https://github.com/pliablepixels/zmNinja/pull/524) ([pliablepixels](https://github.com/pliablepixels))
- Update locale-fr.json [\#518](https://github.com/pliablepixels/zmNinja/pull/518) ([cryptage21](https://github.com/cryptage21))
- Added new strings according to v1.2.41 [\#512](https://github.com/pliablepixels/zmNinja/pull/512) ([florie1706](https://github.com/florie1706))

## [v1.2.41](https://github.com/pliablepixels/zmNinja/tree/v1.2.41) (2017-04-11)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.40...v1.2.41)

**Implemented enhancements:**

- Implement concept of 'default profile' & 'workspace' in Montage [\#509](https://github.com/pliablepixels/zmNinja/issues/509)
- Support Amcrest PTZ in zmNinja [\#508](https://github.com/pliablepixels/zmNinja/issues/508)
- Allow for montage scaling at increments of 5% \(currently 10%\) [\#505](https://github.com/pliablepixels/zmNinja/issues/505)
- In monitor list \(Montage screen\) make the color of disabled monitors more prominent [\#503](https://github.com/pliablepixels/zmNinja/issues/503)

**Fixed bugs:**

- Montage profile showing new monitors automatically [\#504](https://github.com/pliablepixels/zmNinja/issues/504)
- Video playback \(h264\) breaks on iOS with a config.xml setting [\#501](https://github.com/pliablepixels/zmNinja/issues/501)

**Closed issues:**

- Add support for manual disable/enable alarms [\#507](https://github.com/pliablepixels/zmNinja/issues/507)
- When zoneminder is in contineous record mode zmNinja shows no events [\#502](https://github.com/pliablepixels/zmNinja/issues/502)
- 2 Monitors - But only only one show up in "Event List" [\#500](https://github.com/pliablepixels/zmNinja/issues/500)
- Google independent zmNinja via F-Droid  or downloadable packages \(apk\) [\#498](https://github.com/pliablepixels/zmNinja/issues/498)
- iOS app frozen after being in background [\#482](https://github.com/pliablepixels/zmNinja/issues/482)

**Merged pull requests:**

- montage profile save - show existing list too [\#511](https://github.com/pliablepixels/zmNinja/pull/511) ([maymaymay](https://github.com/maymaymay))
-  \#509 - default profile for all monitors and "workspace" [\#510](https://github.com/pliablepixels/zmNinja/pull/510) ([maymaymay](https://github.com/maymaymay))

## [v1.2.40](https://github.com/pliablepixels/zmNinja/tree/v1.2.40) (2017-03-19)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v/1.2.40...v1.2.40)

## [v/1.2.40](https://github.com/pliablepixels/zmNinja/tree/v/1.2.40) (2017-03-19)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.39...v/1.2.40)

**Fixed bugs:**

- Problem with notifications. [\#468](https://github.com/pliablepixels/zmNinja/issues/468)
- Login denied for user "" when not using ZM authentication [\#459](https://github.com/pliablepixels/zmNinja/issues/459)

**Closed issues:**

- Timezone incorrect [\#492](https://github.com/pliablepixels/zmNinja/issues/492)

**Merged pull requests:**

- Update locale-de.json [\#497](https://github.com/pliablepixels/zmNinja/pull/497) ([florie1706](https://github.com/florie1706))
- Update locale-fr 1.2.39 [\#495](https://github.com/pliablepixels/zmNinja/pull/495) ([cryptage21](https://github.com/cryptage21))
- Buttons in this view were the wrong way around [\#494](https://github.com/pliablepixels/zmNinja/pull/494) ([florie1706](https://github.com/florie1706))
- Change languages to their mother tongue [\#493](https://github.com/pliablepixels/zmNinja/pull/493) ([florie1706](https://github.com/florie1706))

## [v1.2.39](https://github.com/pliablepixels/zmNinja/tree/v1.2.39) (2017-03-04)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.38...v1.2.39)

**Implemented enhancements:**

- French Translation [\#469](https://github.com/pliablepixels/zmNinja/issues/469)
- New language: German [\#466](https://github.com/pliablepixels/zmNinja/issues/466)

**Fixed bugs:**

- \(timeout\) "Zoneminder Authentication Failed" even though Zoneminder's logs says authentication was successful [\#487](https://github.com/pliablepixels/zmNinja/issues/487)
- Can't get out of fullscreen mode \(confirmed on win64\) [\#473](https://github.com/pliablepixels/zmNinja/issues/473)

**Closed issues:**

- Update source build to use new versions of Cordova/Ionic [\#491](https://github.com/pliablepixels/zmNinja/issues/491)
- Launch zmNinja via iOS app URL scheme [\#467](https://github.com/pliablepixels/zmNinja/issues/467)
- zmNinja complied from sources for Android and push notification [\#464](https://github.com/pliablepixels/zmNinja/issues/464)
- \[Desktop/Windows\]Window placement and size is not preserved across multiple sessions. [\#462](https://github.com/pliablepixels/zmNinja/issues/462)
- Cycle Montage [\#460](https://github.com/pliablepixels/zmNinja/issues/460)
- view streaming video inside ionic with iOS 10.2.1? [\#458](https://github.com/pliablepixels/zmNinja/issues/458)
- missing event only shown with Filters [\#445](https://github.com/pliablepixels/zmNinja/issues/445)
- FAB action buttons are confusing [\#204](https://github.com/pliablepixels/zmNinja/issues/204)

**Merged pull requests:**

- \#487 - devoption added to increase HTTP timeouts [\#490](https://github.com/pliablepixels/zmNinja/pull/490) ([florie1706](https://github.com/florie1706))
- \#487 - devoption added to increase HTTP timeouts [\#489](https://github.com/pliablepixels/zmNinja/pull/489) ([cryptage21](https://github.com/cryptage21))
-  \#487 - devoption added to increase HTTP timeouts [\#488](https://github.com/pliablepixels/zmNinja/pull/488) ([maymaymay](https://github.com/maymaymay))
- Fixes for some bad German translations [\#486](https://github.com/pliablepixels/zmNinja/pull/486) ([florie1706](https://github.com/florie1706))
- zmNinja removed from translation [\#485](https://github.com/pliablepixels/zmNinja/pull/485) ([florie1706](https://github.com/florie1706))
- clarified menu option [\#481](https://github.com/pliablepixels/zmNinja/pull/481) ([florie1706](https://github.com/florie1706))
- clarified menu option [\#480](https://github.com/pliablepixels/zmNinja/pull/480) ([maymaymay](https://github.com/maymaymay))
- French Language - Update 1 [\#479](https://github.com/pliablepixels/zmNinja/pull/479) ([cryptage21](https://github.com/cryptage21))
- Update locale-de.json [\#478](https://github.com/pliablepixels/zmNinja/pull/478) ([florie1706](https://github.com/florie1706))
- more fixes [\#474](https://github.com/pliablepixels/zmNinja/pull/474) ([florie1706](https://github.com/florie1706))
- Fixed some translations for a better understanding [\#472](https://github.com/pliablepixels/zmNinja/pull/472) ([florie1706](https://github.com/florie1706))
- wrong wording [\#471](https://github.com/pliablepixels/zmNinja/pull/471) ([florie1706](https://github.com/florie1706))
- fixed some typos [\#470](https://github.com/pliablepixels/zmNinja/pull/470) ([florie1706](https://github.com/florie1706))
- Create locale-de.json [\#465](https://github.com/pliablepixels/zmNinja/pull/465) ([florie1706](https://github.com/florie1706))
- spanish update [\#463](https://github.com/pliablepixels/zmNinja/pull/463) ([fxrnando](https://github.com/fxrnando))
- android and iOS ports now allow for strict SSL checks... [\#461](https://github.com/pliablepixels/zmNinja/pull/461) ([maymaymay](https://github.com/maymaymay))

## [v1.2.38](https://github.com/pliablepixels/zmNinja/tree/v1.2.38) (2017-02-17)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.37...v1.2.38)

**Implemented enhancements:**

- SSL - add an option that either requires self signed certs installed on phones or will only work with real certs [\#455](https://github.com/pliablepixels/zmNinja/issues/455)
- Allow users to hide MP4/GIF buttons [\#454](https://github.com/pliablepixels/zmNinja/issues/454)
- make MP4 playback speed configurable \(and persistent\) [\#453](https://github.com/pliablepixels/zmNinja/issues/453)

**Merged pull requests:**

- let's make GIF and MP4 an option in Dev Settings \#454 [\#456](https://github.com/pliablepixels/zmNinja/pull/456) ([maymaymay](https://github.com/maymaymay))

## [v1.2.37](https://github.com/pliablepixels/zmNinja/tree/v1.2.37) (2017-02-11)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.36...v1.2.37)

**Implemented enhancements:**

- Add ability to view server logs [\#452](https://github.com/pliablepixels/zmNinja/issues/452)
- Add ability to reflow montage without resetting size [\#448](https://github.com/pliablepixels/zmNinja/issues/448)

**Fixed bugs:**

- wizard often does not detect cgi-bin [\#451](https://github.com/pliablepixels/zmNinja/issues/451)
- fs command line option not working [\#450](https://github.com/pliablepixels/zmNinja/issues/450)

**Closed issues:**

- Montage Image Scale not Saving on Win x64 [\#447](https://github.com/pliablepixels/zmNinja/issues/447)
- Side menu scroll feature locks after switching servers OR displaying liveview in landscape [\#337](https://github.com/pliablepixels/zmNinja/issues/337)

**Merged pull requests:**

- Translations [\#446](https://github.com/pliablepixels/zmNinja/pull/446) ([maymaymay](https://github.com/maymaymay))

## [v1.2.36](https://github.com/pliablepixels/zmNinja/tree/v1.2.36) (2017-02-06)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.35...v1.2.36)

**Implemented enhancements:**

- Add ability to hide grey buttons in single monitor view [\#443](https://github.com/pliablepixels/zmNinja/issues/443)
- Desktop app opening maximized, in full screen montage view [\#436](https://github.com/pliablepixels/zmNinja/issues/436)
- Adding Dutch Language Files [\#433](https://github.com/pliablepixels/zmNinja/issues/433)
- Allow for archived events to be displayed or hidden \(based on toggle switch\) [\#432](https://github.com/pliablepixels/zmNinja/issues/432)
- Enhancement: Add event names to Event list view [\#431](https://github.com/pliablepixels/zmNinja/issues/431)
- server settings - confirm deletion [\#423](https://github.com/pliablepixels/zmNinja/issues/423)
- Add ability to view zones as overlays on live monitor feed [\#420](https://github.com/pliablepixels/zmNinja/issues/420)
- Add ability to cycle between montage profiles [\#419](https://github.com/pliablepixels/zmNinja/issues/419)
- Adding Dutch language [\#387](https://github.com/pliablepixels/zmNinja/issues/387)
- Hide credentials of simple auth in display [\#363](https://github.com/pliablepixels/zmNinja/issues/363)

**Fixed bugs:**

- switching from full screen to regular causes header alignment issues\(iOS only\) [\#429](https://github.com/pliablepixels/zmNinja/issues/429)
- when bulk frames are present, frame view while viewing footage goes wrong [\#428](https://github.com/pliablepixels/zmNinja/issues/428)
- display cgi-bin error if a wrong cgi path is set in login even if you don't tap save [\#427](https://github.com/pliablepixels/zmNinja/issues/427)
- Fallback Server Hangup [\#424](https://github.com/pliablepixels/zmNinja/issues/424)
- Cannot delete events [\#422](https://github.com/pliablepixels/zmNinja/issues/422)
- restricted users for event notification not working [\#391](https://github.com/pliablepixels/zmNinja/issues/391)

**Closed issues:**

- Hard coded text found [\#440](https://github.com/pliablepixels/zmNinja/issues/440)
- Hard coded text alert found [\#437](https://github.com/pliablepixels/zmNinja/issues/437)
- Typo in Validating-if-APIs-work-on-ZM page \(events instead of events.json\): [\#421](https://github.com/pliablepixels/zmNinja/issues/421)
- event server settings - Strange Behaviour [\#414](https://github.com/pliablepixels/zmNinja/issues/414)

**Merged pull requests:**

- 440 hard coded text found  [\#442](https://github.com/pliablepixels/zmNinja/pull/442) ([steelyard-nl](https://github.com/steelyard-nl))
- sorted keys \#437 [\#439](https://github.com/pliablepixels/zmNinja/pull/439) ([maymaymay](https://github.com/maymaymay))
- 437 hard coded text alert found [\#438](https://github.com/pliablepixels/zmNinja/pull/438) ([steelyard-nl](https://github.com/steelyard-nl))
- 433 adding dutch language files [\#435](https://github.com/pliablepixels/zmNinja/pull/435) ([steelyard-nl](https://github.com/steelyard-nl))
-  you can now toggle a dev option to hide/unhide archived \(flagged\) ev… [\#434](https://github.com/pliablepixels/zmNinja/pull/434) ([maymaymay](https://github.com/maymaymay))
- Translation update to \#423 [\#425](https://github.com/pliablepixels/zmNinja/pull/425) ([maymaymay](https://github.com/maymaymay))

## [v1.2.35](https://github.com/pliablepixels/zmNinja/tree/v1.2.35) (2016-12-31)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.34...v1.2.35)

**Implemented enhancements:**

- Add ability to show motion outlines in alarm frames \(if enabled in ZM\) [\#417](https://github.com/pliablepixels/zmNinja/issues/417)
- Archive selected events [\#388](https://github.com/pliablepixels/zmNinja/issues/388)

**Merged pull requests:**

- Eci peci z tłumaczeniem ;\) Happy New Year!!! [\#418](https://github.com/pliablepixels/zmNinja/pull/418) ([maymaymay](https://github.com/maymaymay))
- Translation update [\#416](https://github.com/pliablepixels/zmNinja/pull/416) ([maymaymay](https://github.com/maymaymay))

## [v1.2.34](https://github.com/pliablepixels/zmNinja/tree/v1.2.34) (2016-12-24)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.33...v1.2.34)

**Implemented enhancements:**

- Add ability to launch app via URL for external integration [\#411](https://github.com/pliablepixels/zmNinja/issues/411)
- Allow for pinning and hiding monitors during rearranging in montage [\#409](https://github.com/pliablepixels/zmNinja/issues/409)

**Fixed bugs:**

- First time users - app gets locked if APIs are not configured \[Mostly Android\] [\#415](https://github.com/pliablepixels/zmNinja/issues/415)

**Closed issues:**

- Missing translations Russian [\#412](https://github.com/pliablepixels/zmNinja/issues/412)
- Missing translations for popup buttons [\#410](https://github.com/pliablepixels/zmNinja/issues/410)
- Mobile unable to connect to the event server [\#403](https://github.com/pliablepixels/zmNinja/issues/403)
- Download events as avi,mov, even mp4 videos [\#334](https://github.com/pliablepixels/zmNinja/issues/334)

**Merged pull requests:**

- New items [\#413](https://github.com/pliablepixels/zmNinja/pull/413) ([BoskSpb](https://github.com/BoskSpb))

## [v1.2.33](https://github.com/pliablepixels/zmNinja/tree/v1.2.33) (2016-12-09)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.32...v1.2.33)

## [v1.2.32](https://github.com/pliablepixels/zmNinja/tree/v1.2.32) (2016-12-09)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.31...v1.2.32)

**Implemented enhancements:**

- Montage Camera Groups [\#397](https://github.com/pliablepixels/zmNinja/issues/397)
- Multiple selectable/saveable 'Montage' views within a server profile  [\#390](https://github.com/pliablepixels/zmNinja/issues/390)

**Fixed bugs:**

- In some cases, events screen shows no events - even though there are events [\#408](https://github.com/pliablepixels/zmNinja/issues/408)

**Closed issues:**

- Translation issue [\#400](https://github.com/pliablepixels/zmNinja/issues/400)

**Merged pull requests:**

- translation updates [\#407](https://github.com/pliablepixels/zmNinja/pull/407) ([maymaymay](https://github.com/maymaymay))
- Updated Portuguese Translation [\#406](https://github.com/pliablepixels/zmNinja/pull/406) ([ljpinho](https://github.com/ljpinho))
- spanish language update translations and modifying an instruction lin… [\#404](https://github.com/pliablepixels/zmNinja/pull/404) ([fxrnando](https://github.com/fxrnando))
- Updated 3 missing keys [\#402](https://github.com/pliablepixels/zmNinja/pull/402) ([maymaymay](https://github.com/maymaymay))
- Translation update [\#399](https://github.com/pliablepixels/zmNinja/pull/399) ([maymaymay](https://github.com/maymaymay))
- Translation updates [\#396](https://github.com/pliablepixels/zmNinja/pull/396) ([maymaymay](https://github.com/maymaymay))
-  Translation adjustments. [\#393](https://github.com/pliablepixels/zmNinja/pull/393) ([maymaymay](https://github.com/maymaymay))
- Translation updates to \#383 [\#392](https://github.com/pliablepixels/zmNinja/pull/392) ([maymaymay](https://github.com/maymaymay))

## [v1.2.31](https://github.com/pliablepixels/zmNinja/tree/v1.2.31) (2016-12-02)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.30...v1.2.31)

**Fixed bugs:**

- \[H.264\] Cue position: player reports incorrect length [\#395](https://github.com/pliablepixels/zmNinja/issues/395)
- hardcoded phrases in code \(not using translation files\) [\#394](https://github.com/pliablepixels/zmNinja/issues/394)

**Closed issues:**

- rewrite GIFcreation to be able to handle much larger images [\#398](https://github.com/pliablepixels/zmNinja/issues/398)

## [v1.2.30](https://github.com/pliablepixels/zmNinja/tree/v1.2.30) (2016-11-26)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.29...v1.2.30)

**Implemented enhancements:**

- Add ability to download mp4 files: if using feature-264 [\#383](https://github.com/pliablepixels/zmNinja/issues/383)
- \[H264\] Playback speed in event player [\#382](https://github.com/pliablepixels/zmNinja/issues/382)
- \[h264\] add cue points in video player for alarmed frames [\#381](https://github.com/pliablepixels/zmNinja/issues/381)
- Add ability to save animated gif version of event \(alarm frames only\) [\#379](https://github.com/pliablepixels/zmNinja/issues/379)

**Closed issues:**

- \[BUG\] Window title does not change to 'Events' when in events view [\#389](https://github.com/pliablepixels/zmNinja/issues/389)
- adding spanish language [\#384](https://github.com/pliablepixels/zmNinja/issues/384)
- Monitor configuration change hangs on FreeBSD-11 [\#373](https://github.com/pliablepixels/zmNinja/issues/373)

**Merged pull requests:**

- Translation updates. [\#386](https://github.com/pliablepixels/zmNinja/pull/386) ([maymaymay](https://github.com/maymaymay))
- 384 spanish trans [\#385](https://github.com/pliablepixels/zmNinja/pull/385) ([fxrnando](https://github.com/fxrnando))
- more minor fixes [\#378](https://github.com/pliablepixels/zmNinja/pull/378) ([maymaymay](https://github.com/maymaymay))
- minor fixes [\#377](https://github.com/pliablepixels/zmNinja/pull/377) ([maymaymay](https://github.com/maymaymay))
- minor fixes [\#376](https://github.com/pliablepixels/zmNinja/pull/376) ([maymaymay](https://github.com/maymaymay))

## [v1.2.29](https://github.com/pliablepixels/zmNinja/tree/v1.2.29) (2016-11-16)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v/1.2.28...v1.2.29)

**Implemented enhancements:**

- New language: Polish \(credit @maymaymay\) [\#372](https://github.com/pliablepixels/zmNinja/issues/372)
- \[NFR\] Add button 'Now' to timeline screen [\#371](https://github.com/pliablepixels/zmNinja/issues/371)
- Add Russian language \(credit @BoskSpb\) [\#366](https://github.com/pliablepixels/zmNinja/issues/366)
- \[H264\] Time overlay during playback [\#362](https://github.com/pliablepixels/zmNinja/issues/362)
- Option to fit to screen on H264 event playback [\#358](https://github.com/pliablepixels/zmNinja/issues/358)

**Fixed bugs:**

- On certain samsung phones, autocorrect makes it hard to enter text in input configuration [\#367](https://github.com/pliablepixels/zmNinja/issues/367)
- When navigating events using prev/next or gapless, it shows all events including ones with 0 alarms [\#113](https://github.com/pliablepixels/zmNinja/issues/113)

**Closed issues:**

- Timeline dynamic updates issue [\#369](https://github.com/pliablepixels/zmNinja/issues/369)

**Merged pull requests:**

- Polish language name modyfication [\#375](https://github.com/pliablepixels/zmNinja/pull/375) ([maymaymay](https://github.com/maymaymay))
- added the enhancement label [\#374](https://github.com/pliablepixels/zmNinja/pull/374) ([maymaymay](https://github.com/maymaymay))
- Create help-pl.html [\#370](https://github.com/pliablepixels/zmNinja/pull/370) ([maymaymay](https://github.com/maymaymay))
- Create locale-pl.json [\#368](https://github.com/pliablepixels/zmNinja/pull/368) ([maymaymay](https://github.com/maymaymay))
- Adding Russian language in App [\#365](https://github.com/pliablepixels/zmNinja/pull/365) ([BoskSpb](https://github.com/BoskSpb))

## [v/1.2.28](https://github.com/pliablepixels/zmNinja/tree/v/1.2.28) (2016-11-08)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.28...v/1.2.28)

## [v1.2.28](https://github.com/pliablepixels/zmNinja/tree/v1.2.28) (2016-11-08)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.26...v1.2.28)

**Implemented enhancements:**

- \[DESKTOP\] \(H264\) Automatic playback? [\#359](https://github.com/pliablepixels/zmNinja/issues/359)
- Remember last state of application \(desktops\) [\#357](https://github.com/pliablepixels/zmNinja/issues/357)
- Allow option for timeline view to get dynamically updated as new events occur [\#356](https://github.com/pliablepixels/zmNinja/issues/356)
- Differentiate between server timezone and local timezone  \(needs ZM API Update \#1655\) [\#353](https://github.com/pliablepixels/zmNinja/issues/353)

**Fixed bugs:**

- Cancel timeline custom range settings leads to indefinitely 'working on graph data'  [\#360](https://github.com/pliablepixels/zmNinja/issues/360)
- alarm frame navigation while watching event footage shows incorrect frames [\#354](https://github.com/pliablepixels/zmNinja/issues/354)
- iOS Websockets stopped working with latest updates [\#352](https://github.com/pliablepixels/zmNinja/issues/352)
- Android \< 5.0 has SSL cert issues [\#351](https://github.com/pliablepixels/zmNinja/issues/351)
- Try and solve the montage overlapping when the image doesn't fully load [\#350](https://github.com/pliablepixels/zmNinja/issues/350)

**Closed issues:**

- view=view\_video mode is not working \(requires ZM patch\) [\#364](https://github.com/pliablepixels/zmNinja/issues/364)
- Can't load as a web page on Android since d76cf1c commit [\#355](https://github.com/pliablepixels/zmNinja/issues/355)

## [v1.2.26](https://github.com/pliablepixels/zmNinja/tree/v1.2.26) (2016-10-13)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.24...v1.2.26)

**Implemented enhancements:**

- simplify event montage UX [\#348](https://github.com/pliablepixels/zmNinja/issues/348)
- Show actual \(server\) time in visible in full screen \(desktop\) [\#346](https://github.com/pliablepixels/zmNinja/issues/346)
- Implement "shrinking headers" as you scroll to get more real estate [\#342](https://github.com/pliablepixels/zmNinja/issues/342)
- Add Montage Awesomeness to Event Montage [\#201](https://github.com/pliablepixels/zmNinja/issues/201)

**Fixed bugs:**

- Make events list work with system font size [\#339](https://github.com/pliablepixels/zmNinja/issues/339)
- IOS 10 - crash on image save to photo albums [\#338](https://github.com/pliablepixels/zmNinja/issues/338)

**Closed issues:**

- Montage Not working [\#343](https://github.com/pliablepixels/zmNinja/issues/343)
- Show an error message if event server connection fail [\#341](https://github.com/pliablepixels/zmNinja/issues/341)
- adding download button for video events [\#235](https://github.com/pliablepixels/zmNinja/issues/235)

**Merged pull requests:**

- Montage jazz [\#349](https://github.com/pliablepixels/zmNinja/pull/349) ([pliablepixels](https://github.com/pliablepixels))
- fixes issue \#337 [\#344](https://github.com/pliablepixels/zmNinja/pull/344) ([PartialVolume](https://github.com/PartialVolume))
- initial experiments [\#340](https://github.com/pliablepixels/zmNinja/pull/340) ([pliablepixels](https://github.com/pliablepixels))

## [v1.2.24](https://github.com/pliablepixels/zmNinja/tree/v1.2.24) (2016-09-24)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.19...v1.2.24)

**Implemented enhancements:**

- Arabic language implementation \(credit @aljabr\) [\#336](https://github.com/pliablepixels/zmNinja/issues/336)
- enable low bandwidth mode for zmN [\#321](https://github.com/pliablepixels/zmNinja/issues/321)

**Fixed bugs:**

- Yellow Event Summary Window \(Ionic pullup footer\) displays no data when dragged up. [\#333](https://github.com/pliablepixels/zmNinja/issues/333)
- No live view \(via monitor, not montage\) after switching between servers. [\#329](https://github.com/pliablepixels/zmNinja/issues/329)
- languages with non-english numbers break events/timeline feeds [\#325](https://github.com/pliablepixels/zmNinja/issues/325)
- "Error - unable to save snapshot" on Android V6 [\#322](https://github.com/pliablepixels/zmNinja/issues/322)

**Closed issues:**

- Syntax error: newline unexpected [\#335](https://github.com/pliablepixels/zmNinja/issues/335)
- v [\#332](https://github.com/pliablepixels/zmNinja/issues/332)
- Validate From/To date in Event Filter [\#330](https://github.com/pliablepixels/zmNinja/issues/330)
- IOS status bar [\#324](https://github.com/pliablepixels/zmNinja/issues/324)
- ZMNinja for Kodi [\#311](https://github.com/pliablepixels/zmNinja/issues/311)
- zmNinja for Windows Mobile [\#299](https://github.com/pliablepixels/zmNinja/issues/299)

**Merged pull requests:**

- add more translate [\#331](https://github.com/pliablepixels/zmNinja/pull/331) ([aljabr](https://github.com/aljabr))
- all new key on -en file translated [\#328](https://github.com/pliablepixels/zmNinja/pull/328) ([mcbittech](https://github.com/mcbittech))
- New keys translated. [\#323](https://github.com/pliablepixels/zmNinja/pull/323) ([ljpinho](https://github.com/ljpinho))

## [v1.2.19](https://github.com/pliablepixels/zmNinja/tree/v1.2.19) (2016-09-04)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.18...v1.2.19)

**Implemented enhancements:**

- Cycle monitors [\#319](https://github.com/pliablepixels/zmNinja/issues/319)

**Fixed bugs:**

- Switching servers without saving first causes the app to freeze \(android/ios\) [\#320](https://github.com/pliablepixels/zmNinja/issues/320)

## [v1.2.18](https://github.com/pliablepixels/zmNinja/tree/v1.2.18) (2016-09-02)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.17...v1.2.18)

**Implemented enhancements:**

- for all event related views \(event list, footage, analyze\) show "relative time from now" like "1 day ago" or "2 hours ago" [\#317](https://github.com/pliablepixels/zmNinja/issues/317)

## [v1.2.17](https://github.com/pliablepixels/zmNinja/tree/v1.2.17) (2016-09-01)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.13...v1.2.17)

**Implemented enhancements:**

- Add ability to perform monitor config changes for all monitors \(credit @sctt\) [\#316](https://github.com/pliablepixels/zmNinja/issues/316)
- enable/disable sound and vibration push notifications [\#314](https://github.com/pliablepixels/zmNinja/issues/314)
- Add Wake/Sleep/Reset  to PTZ functions \(credit: @sctt\) [\#306](https://github.com/pliablepixels/zmNinja/issues/306)

**Fixed bugs:**

- clean up event server flow - its been a bloody mess for a while [\#312](https://github.com/pliablepixels/zmNinja/issues/312)
- Add option to disable nativeTransitions [\#310](https://github.com/pliablepixels/zmNinja/issues/310)
- app freezes when adding more than 2 profiles  [\#304](https://github.com/pliablepixels/zmNinja/issues/304)
- saving a server profile removes the "Add" button while in the same view [\#303](https://github.com/pliablepixels/zmNinja/issues/303)
- 1.2.0 seems to have routing issues and xwalk issues [\#302](https://github.com/pliablepixels/zmNinja/issues/302)
- zmNinja fails to log in over open internet on first invocation [\#126](https://github.com/pliablepixels/zmNinja/issues/126)
- it seems in some cases monitor intervals don't get transmitted to zmeventserver [\#112](https://github.com/pliablepixels/zmNinja/issues/112)

**Closed issues:**

- ZMninja API issue with zoneminder 1.30 [\#300](https://github.com/pliablepixels/zmNinja/issues/300)

**Merged pull requests:**

- tweaks to \#313 [\#315](https://github.com/pliablepixels/zmNinja/pull/315) ([pliablepixels](https://github.com/pliablepixels))
- Added Global Configuration function for monitors [\#313](https://github.com/pliablepixels/zmNinja/pull/313) ([sctt](https://github.com/sctt))
- Revert "Added Wake-Sleep-Reset control commands" [\#309](https://github.com/pliablepixels/zmNinja/pull/309) ([pliablepixels](https://github.com/pliablepixels))
- tweaks to Sleep/Wake/Reset \#306 [\#308](https://github.com/pliablepixels/zmNinja/pull/308) ([pliablepixels](https://github.com/pliablepixels))
- Added Wake-Sleep-Reset control commands [\#307](https://github.com/pliablepixels/zmNinja/pull/307) ([sctt](https://github.com/sctt))

## [v1.2.13](https://github.com/pliablepixels/zmNinja/tree/v1.2.13) (2016-08-18)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.2.0...v1.2.13)

**Closed issues:**

- modal close via back action on Android - make  sure all timers re-start/resources released [\#305](https://github.com/pliablepixels/zmNinja/issues/305)

## [v1.2.0](https://github.com/pliablepixels/zmNinja/tree/v1.2.0) (2016-08-10)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/vv1.2.0...v1.2.0)

## [vv1.2.0](https://github.com/pliablepixels/zmNinja/tree/vv1.2.0) (2016-08-10)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.96...vv1.2.0)

**Implemented enhancements:**

- Allow frame navigation when you tap on alarms  view within the modal  [\#301](https://github.com/pliablepixels/zmNinja/issues/301)
- When viewing alarmed frames in events view, allow option to only show frames that differ in time [\#296](https://github.com/pliablepixels/zmNinja/issues/296)
- Encrypt user profile for more security [\#294](https://github.com/pliablepixels/zmNinja/issues/294)
- Portuguese language support  [\#290](https://github.com/pliablepixels/zmNinja/issues/290)
- Allow frame navigation when you tap on a thumbnail image  [\#288](https://github.com/pliablepixels/zmNinja/issues/288)
- tapping on graphs should show a nice event list - current doesn't do anything useful [\#18](https://github.com/pliablepixels/zmNinja/issues/18)

**Fixed bugs:**

- Password appears in log as plain text [\#293](https://github.com/pliablepixels/zmNinja/issues/293)
- server settings get deleted, especially on iOS [\#292](https://github.com/pliablepixels/zmNinja/issues/292)
- Tweak montage layout to avoid overlaps and gaps  [\#286](https://github.com/pliablepixels/zmNinja/issues/286)
- Focus! Solve that damn "go to login screen" issue that some users are facing [\#193](https://github.com/pliablepixels/zmNinja/issues/193)

**Closed issues:**

- license doc typos [\#297](https://github.com/pliablepixels/zmNinja/issues/297)
- Having issues setting up Real Time Notifications with ZM ninja and ZM server [\#295](https://github.com/pliablepixels/zmNinja/issues/295)
- zmNinja via VPN on iOS [\#265](https://github.com/pliablepixels/zmNinja/issues/265)
- rework event graphs in event page, make event navigation easier [\#233](https://github.com/pliablepixels/zmNinja/issues/233)
- PTZ support could be improved [\#207](https://github.com/pliablepixels/zmNinja/issues/207)

**Merged pull requests:**

- license doc typos \#297 [\#298](https://github.com/pliablepixels/zmNinja/pull/298) ([phillxnet](https://github.com/phillxnet))
- Some corrections to Portuguese translation [\#291](https://github.com/pliablepixels/zmNinja/pull/291) ([ljpinho](https://github.com/ljpinho))
- Portugues Language [\#289](https://github.com/pliablepixels/zmNinja/pull/289) ([ljpinho](https://github.com/ljpinho))
- New translated key addiction in locale-it.json [\#287](https://github.com/pliablepixels/zmNinja/pull/287) ([mcbittech](https://github.com/mcbittech))

## [v1.1.96](https://github.com/pliablepixels/zmNinja/tree/v1.1.96) (2016-07-13)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.94...v1.1.96)

**Implemented enhancements:**

- Make sure zmNinja plays ball with new user roles in APIs [\#93](https://github.com/pliablepixels/zmNinja/issues/93)

**Fixed bugs:**

- Slash screen PIN entry text error on zmN 1.1.94b [\#284](https://github.com/pliablepixels/zmNinja/issues/284)
- build for android broke - uglify is messing up release builds [\#282](https://github.com/pliablepixels/zmNinja/issues/282)
- ZMNinja back button issue [\#281](https://github.com/pliablepixels/zmNinja/issues/281)
- Modify montage filtering to make sure maxLimit does not include disabled monitors [\#277](https://github.com/pliablepixels/zmNinja/issues/277)
- Some Android phones seem to have SSL issues with self-signed certs [\#273](https://github.com/pliablepixels/zmNinja/issues/273)

**Closed issues:**

- Multi-server not video from cameras [\#283](https://github.com/pliablepixels/zmNinja/issues/283)

## [v1.1.94](https://github.com/pliablepixels/zmNinja/tree/v1.1.94) (2016-07-09)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.93...v1.1.94)

**Implemented enhancements:**

- Allow to  navigate to live stream on notification tap [\#278](https://github.com/pliablepixels/zmNinja/issues/278)
- Allow upto 10 monitors to be arranged per row  in montage [\#276](https://github.com/pliablepixels/zmNinja/issues/276)

**Fixed bugs:**

- Playback of events fails using view=video mode [\#275](https://github.com/pliablepixels/zmNinja/issues/275)
- zmNinja does not launch on iOS 10 [\#271](https://github.com/pliablepixels/zmNinja/issues/271)

**Closed issues:**

- zmNinja-I can only see one camera in the app in montage view, but I can see my 2 cameras in browser [\#280](https://github.com/pliablepixels/zmNinja/issues/280)
- Swipe to next event for the same monitor id not working [\#274](https://github.com/pliablepixels/zmNinja/issues/274)

## [v1.1.93](https://github.com/pliablepixels/zmNinja/tree/v1.1.93) (2016-06-16)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.92...v1.1.93)

**Implemented enhancements:**

- Implement language translations [\#261](https://github.com/pliablepixels/zmNinja/issues/261)
- Italian Language [\#260](https://github.com/pliablepixels/zmNinja/issues/260)
- Improve desktop mouse-wheel scrolling in the event view [\#258](https://github.com/pliablepixels/zmNinja/issues/258)

**Fixed bugs:**

- Allow special characters in password to work in wizard  [\#264](https://github.com/pliablepixels/zmNinja/issues/264)
- if you open a footage modal and exit before 5 seconds, the app keeps checking for event status  [\#257](https://github.com/pliablepixels/zmNinja/issues/257)
- Montage and Live View no longer working [\#256](https://github.com/pliablepixels/zmNinja/issues/256)
- 1.1.9 for Android broke pinch and zoom [\#255](https://github.com/pliablepixels/zmNinja/issues/255)

**Closed issues:**

- Fix android permissions [\#268](https://github.com/pliablepixels/zmNinja/issues/268)
- Validate language coverage [\#267](https://github.com/pliablepixels/zmNinja/issues/267)
- Update project to work with ionic@2 tools [\#259](https://github.com/pliablepixels/zmNinja/issues/259)
- switch to non parsed zms for montage - see if it helps packery [\#254](https://github.com/pliablepixels/zmNinja/issues/254)

**Merged pull requests:**

- IT Translations correction \#270 [\#272](https://github.com/pliablepixels/zmNinja/pull/272) ([mcbittech](https://github.com/mcbittech))
- More Translations \#267 [\#269](https://github.com/pliablepixels/zmNinja/pull/269) ([mcbittech](https://github.com/mcbittech))
- Italian Translations first commit [\#266](https://github.com/pliablepixels/zmNinja/pull/266) ([mcbittech](https://github.com/mcbittech))

## [v1.1.92](https://github.com/pliablepixels/zmNinja/tree/v1.1.92) (2016-05-21)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.9...v1.1.92)

## [v1.1.9](https://github.com/pliablepixels/zmNinja/tree/v1.1.9) (2016-05-20)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.7...v1.1.9)

**Implemented enhancements:**

- Add ability to jump to specific timeframe during event playback [\#252](https://github.com/pliablepixels/zmNinja/issues/252)
- Allow users to specify a minimum alarm frame count for the events page [\#250](https://github.com/pliablepixels/zmNinja/issues/250)
- Implement new color scheme  [\#249](https://github.com/pliablepixels/zmNinja/issues/249)
- Show recording state in monitors \(alert/alarm/recording/idle\) [\#248](https://github.com/pliablepixels/zmNinja/issues/248)
- add ability to force trigger alarms \(needs API upgrade\) [\#245](https://github.com/pliablepixels/zmNinja/issues/245)
- support multi-server feeds and the new server API [\#241](https://github.com/pliablepixels/zmNinja/issues/241)
- Write a configuration wizard [\#234](https://github.com/pliablepixels/zmNinja/issues/234)

**Fixed bugs:**

- Fix keyboard jump on certain fields/iOS [\#251](https://github.com/pliablepixels/zmNinja/issues/251)
- clean up buttons so they don't overlap in many views [\#246](https://github.com/pliablepixels/zmNinja/issues/246)
- Switching between profiles fails to discover monitors [\#244](https://github.com/pliablepixels/zmNinja/issues/244)
- Event Graphs issue [\#239](https://github.com/pliablepixels/zmNinja/issues/239)
- Event server customization [\#238](https://github.com/pliablepixels/zmNinja/issues/238)
- Push notification issue [\#237](https://github.com/pliablepixels/zmNinja/issues/237)
- Fix the monitor orientation code for rotated cameras [\#232](https://github.com/pliablepixels/zmNinja/issues/232)
- protocol bug - cgi-bin discover [\#231](https://github.com/pliablepixels/zmNinja/issues/231)

**Closed issues:**

- . [\#253](https://github.com/pliablepixels/zmNinja/issues/253)
- clean up monitorCtrl - remove Event crap - we now have different controllers [\#247](https://github.com/pliablepixels/zmNinja/issues/247)
- switching between fid mode playback \(api 1.30+\) and path mode causes issues if I don't restart app [\#243](https://github.com/pliablepixels/zmNinja/issues/243)
- video .mp4 event issue [\#242](https://github.com/pliablepixels/zmNinja/issues/242)
- check if android is exiting on background [\#240](https://github.com/pliablepixels/zmNinja/issues/240)
- Enhancement: zmNinja as surveillance solution [\#236](https://github.com/pliablepixels/zmNinja/issues/236)
- Application not recorvering from connection errors [\#199](https://github.com/pliablepixels/zmNinja/issues/199)
- Event Montage unstable [\#183](https://github.com/pliablepixels/zmNinja/issues/183)
- \[DESKTOP\] Playback control bar lost some features in 1.0.9 [\#176](https://github.com/pliablepixels/zmNinja/issues/176)

## [v1.1.7](https://github.com/pliablepixels/zmNinja/tree/v1.1.7) (2016-04-23)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.4...v1.1.7)

**Implemented enhancements:**

- Add option to tap on alarm events in events view to see a larger version [\#229](https://github.com/pliablepixels/zmNinja/issues/229)
- Add a helper function to automatically detect cgi-bin [\#228](https://github.com/pliablepixels/zmNinja/issues/228)
- PTZ zoom support [\#224](https://github.com/pliablepixels/zmNinja/issues/224)

**Fixed bugs:**

- Not possible to control PTZ after swipe from non-PTZ camera [\#223](https://github.com/pliablepixels/zmNinja/issues/223)
- PTZ with moveRel \(Axis PTZ as an example\) does not work when navigated from Montage view [\#222](https://github.com/pliablepixels/zmNinja/issues/222)
- montage natural scrolling does not work  [\#218](https://github.com/pliablepixels/zmNinja/issues/218)
- when dragging around in analyze graph, don't scroll the screen [\#217](https://github.com/pliablepixels/zmNinja/issues/217)
- full screen in montage does not work [\#216](https://github.com/pliablepixels/zmNinja/issues/216)

**Closed issues:**

- improve timeline taps - make a closest guess  [\#230](https://github.com/pliablepixels/zmNinja/issues/230)
- iOS and Android: introduce native transitions and scrolling \[performance\] [\#226](https://github.com/pliablepixels/zmNinja/issues/226)
- Email notifications with animated GIF attachements [\#225](https://github.com/pliablepixels/zmNinja/issues/225)
- Add version number to help page [\#220](https://github.com/pliablepixels/zmNinja/issues/220)
- Upgrade code-base to new plugins, ionic 1.2.4, etc. [\#219](https://github.com/pliablepixels/zmNinja/issues/219)
- Error: Hook failed with error code ENOENT: [\#210](https://github.com/pliablepixels/zmNinja/issues/210)

## [v1.1.4](https://github.com/pliablepixels/zmNinja/tree/v1.1.4) (2016-04-05)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.3...v1.1.4)

## [v1.1.3](https://github.com/pliablepixels/zmNinja/tree/v1.1.3) (2016-04-02)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.2...v1.1.3)

**Implemented enhancements:**

- new feature to analyze frames quickly from event list  [\#215](https://github.com/pliablepixels/zmNinja/issues/215)
- re-introduce ability to hide monitors with new drag/drop montage [\#213](https://github.com/pliablepixels/zmNinja/issues/213)
- Enhance timeline graph to allow for event frame scrubbing [\#209](https://github.com/pliablepixels/zmNinja/issues/209)
- Allow ability to only browse alarm frames while in full screen footage view [\#206](https://github.com/pliablepixels/zmNinja/issues/206)

**Fixed bugs:**

- zmNinja build from source does not load on iOS 9.x - hangs on splashscreen [\#212](https://github.com/pliablepixels/zmNinja/issues/212)
- Some SSL users are facing issues with reachability returning no servers reachable [\#208](https://github.com/pliablepixels/zmNinja/issues/208)

**Closed issues:**

- zmNinja 1.1.3 build from source - Push registration failed  [\#214](https://github.com/pliablepixels/zmNinja/issues/214)
- No live view video playback, cgi path is set. [\#211](https://github.com/pliablepixels/zmNinja/issues/211)
- Fix layout for first run when no layout config exists - check demo acct [\#205](https://github.com/pliablepixels/zmNinja/issues/205)

## [v1.1.2](https://github.com/pliablepixels/zmNinja/tree/v1.1.2) (2016-03-19)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.1...v1.1.2)

**Implemented enhancements:**

- Left drawer should open with swipe gesture in any view not just fullscreen [\#202](https://github.com/pliablepixels/zmNinja/issues/202)
- Local and External Server configuration \[$5\] [\#133](https://github.com/pliablepixels/zmNinja/issues/133)

**Fixed bugs:**

- quick scrub drag slider stopped working  [\#196](https://github.com/pliablepixels/zmNinja/issues/196)

**Closed issues:**

- Add gesture to exit any fullscreen [\#203](https://github.com/pliablepixels/zmNinja/issues/203)
- Demo Account Autocreating itself [\#200](https://github.com/pliablepixels/zmNinja/issues/200)
- ionic state restore not creating platforms/android directory [\#198](https://github.com/pliablepixels/zmNinja/issues/198)
- Authentication Failed [\#195](https://github.com/pliablepixels/zmNinja/issues/195)

## [v1.1.1](https://github.com/pliablepixels/zmNinja/tree/v1.1.1) (2016-03-14)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.1.0...v1.1.1)

**Fixed bugs:**

- The new montage function resets montage layout if there are hidden or disabled monitors [\#194](https://github.com/pliablepixels/zmNinja/issues/194)

**Closed issues:**

- Testing issue template \(dummy issue\) [\#192](https://github.com/pliablepixels/zmNinja/issues/192)
- testing issue template [\#191](https://github.com/pliablepixels/zmNinja/issues/191)
- decrease splash screen delay \(reduce startup delay\) [\#190](https://github.com/pliablepixels/zmNinja/issues/190)
- Android build fails ref \#180 [\#184](https://github.com/pliablepixels/zmNinja/issues/184)

## [v1.1.0](https://github.com/pliablepixels/zmNinja/tree/v1.1.0) (2016-03-12)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.9...v1.1.0)

**Implemented enhancements:**

- Add a pre-configured demo account for people to test around with [\#187](https://github.com/pliablepixels/zmNinja/issues/187)
- Add gesture to open left menu while in full screen live view [\#185](https://github.com/pliablepixels/zmNinja/issues/185)
- Add touch gesture to exit live view [\#182](https://github.com/pliablepixels/zmNinja/issues/182)
- add dynamic drag and drop and multiple size options to montage - make it awesome and more consistent [\#179](https://github.com/pliablepixels/zmNinja/issues/179)
- Prev day/next day for timeline [\#177](https://github.com/pliablepixels/zmNinja/issues/177)
- 12/24 hours scheme settings  [\#175](https://github.com/pliablepixels/zmNinja/issues/175)

**Fixed bugs:**

- switching server profiles causes inconsistency if you go to developer options [\#189](https://github.com/pliablepixels/zmNinja/issues/189)
- changing timeline limit does not go into effect until app restart [\#188](https://github.com/pliablepixels/zmNinja/issues/188)
- Desktop \(possibly others\): Inescapable UI pattern [\#174](https://github.com/pliablepixels/zmNinja/issues/174)

**Closed issues:**

- No image for monitors nor events [\#181](https://github.com/pliablepixels/zmNinja/issues/181)
- Android build fails [\#180](https://github.com/pliablepixels/zmNinja/issues/180)
- iPhone stopped working [\#178](https://github.com/pliablepixels/zmNinja/issues/178)
- non-free license [\#173](https://github.com/pliablepixels/zmNinja/issues/173)
- iOS: Montage View arrange views \(third icon from top-right\) does not function [\#172](https://github.com/pliablepixels/zmNinja/issues/172)

## [v1.0.9](https://github.com/pliablepixels/zmNinja/tree/v1.0.9) (2016-02-25)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.7...v1.0.9)

**Implemented enhancements:**

- Route event playback via ZMS [\#164](https://github.com/pliablepixels/zmNinja/issues/164)
- Montage view zoom slider, ergonomy [\#163](https://github.com/pliablepixels/zmNinja/issues/163)
- \[DESKTOP\] Zooming for non touch screen displays. [\#162](https://github.com/pliablepixels/zmNinja/issues/162)
- Fix playback speed for long events [\#161](https://github.com/pliablepixels/zmNinja/issues/161)

**Fixed bugs:**

- Desktop: Monitors Freeze when Exiting Full Screen [\#169](https://github.com/pliablepixels/zmNinja/issues/169)
- changing to invalid credentials after valid credentials continues to work [\#167](https://github.com/pliablepixels/zmNinja/issues/167)

**Closed issues:**

- iOS: Events--\>Filter by Date/Time does not work [\#171](https://github.com/pliablepixels/zmNinja/issues/171)
- Desktop: Event Footage extremely low resolution [\#168](https://github.com/pliablepixels/zmNinja/issues/168)
- ionic state restore failed [\#166](https://github.com/pliablepixels/zmNinja/issues/166)
- Desktop: Montage places last image below rather than alongside previous [\#165](https://github.com/pliablepixels/zmNinja/issues/165)
- \[DESKTOP\] Playback issue on windows platform [\#151](https://github.com/pliablepixels/zmNinja/issues/151)

## [v1.0.7](https://github.com/pliablepixels/zmNinja/tree/v1.0.7) (2016-02-09)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.6...v1.0.7)

**Implemented enhancements:**

- Refine montage history to accept from/to dates [\#160](https://github.com/pliablepixels/zmNinja/issues/160)

**Closed issues:**

- Build is failing [\#156](https://github.com/pliablepixels/zmNinja/issues/156)

## [v1.0.6](https://github.com/pliablepixels/zmNinja/tree/v1.0.6) (2016-02-05)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.5...v1.0.6)

**Implemented enhancements:**

- Allow event server to work without SSL - requires zmeventserver upgrade  [\#159](https://github.com/pliablepixels/zmNinja/issues/159)
- Introduce a montage timeline function  [\#154](https://github.com/pliablepixels/zmNinja/issues/154)
- Addition Next frame/prev frame buttons when viewing event - for fine grained snapshot control. [\#150](https://github.com/pliablepixels/zmNinja/issues/150)
- Notification icon and sound - add ability to play default sounds [\#135](https://github.com/pliablepixels/zmNinja/issues/135)

**Closed issues:**

- Make exit buttons of live view and events view consistent [\#158](https://github.com/pliablepixels/zmNinja/issues/158)
- Remove SSL cert requirement [\#157](https://github.com/pliablepixels/zmNinja/issues/157)
- Closing data leaks - trying to bottle up areas which may result in chrome keeping TCP connections open in background [\#155](https://github.com/pliablepixels/zmNinja/issues/155)
- xcode fails on linking [\#153](https://github.com/pliablepixels/zmNinja/issues/153)
- installing ios-deploy ends with an error [\#152](https://github.com/pliablepixels/zmNinja/issues/152)
- Progress bar is ignored in Event View when playback is paused. [\#149](https://github.com/pliablepixels/zmNinja/issues/149)

## [v1.0.5](https://github.com/pliablepixels/zmNinja/tree/v1.0.5) (2016-01-23)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.3...v1.0.5)

**Implemented enhancements:**

- Add ability to save a snapshot of an event playback to disk [\#148](https://github.com/pliablepixels/zmNinja/issues/148)

**Fixed bugs:**

- 1.0.4 Broke basic auth  [\#147](https://github.com/pliablepixels/zmNinja/issues/147)
- Basic auth only - no zm auth - app goes to login on restart and says auth fails - app works [\#140](https://github.com/pliablepixels/zmNinja/issues/140)

**Closed issues:**

- montage display wrap got messed up in newer versions of Chrome [\#146](https://github.com/pliablepixels/zmNinja/issues/146)
- Viewing events on slow connection basically doesn't work [\#145](https://github.com/pliablepixels/zmNinja/issues/145)

## [v1.0.3](https://github.com/pliablepixels/zmNinja/tree/v1.0.3) (2016-01-19)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.2...v1.0.3)

**Implemented enhancements:**

- Allow montage to flow as columns \(packed\) or rows \(not packed\)  [\#144](https://github.com/pliablepixels/zmNinja/issues/144)
- Reduce android apk size  [\#142](https://github.com/pliablepixels/zmNinja/issues/142)
- Improve timeline performance [\#129](https://github.com/pliablepixels/zmNinja/issues/129)
- For Android only: Allow an exit option in menu [\#128](https://github.com/pliablepixels/zmNinja/issues/128)
- Implement a mechanism to detect when network is on/off [\#127](https://github.com/pliablepixels/zmNinja/issues/127)
- Add support for Pan/Tilt/Zoom Presets [\#116](https://github.com/pliablepixels/zmNinja/issues/116)

**Fixed bugs:**

- Monitor order is different one can observe in ZM montage [\#143](https://github.com/pliablepixels/zmNinja/issues/143)
- You can swipe to dead monitor [\#138](https://github.com/pliablepixels/zmNinja/issues/138)
- switching networks should trigger authentication [\#134](https://github.com/pliablepixels/zmNinja/issues/134)
- Excessive background data usage [\#131](https://github.com/pliablepixels/zmNinja/issues/131)

**Closed issues:**

- \[Log in Failed\] Checking if reCaptcha is enabled in zm.. [\#141](https://github.com/pliablepixels/zmNinja/issues/141)
- Swiping with ZMS is slower than swiping without zms [\#139](https://github.com/pliablepixels/zmNinja/issues/139)
- Exit button on Android build  [\#137](https://github.com/pliablepixels/zmNinja/issues/137)
- zmninja cannot talk to zmeventserver [\#136](https://github.com/pliablepixels/zmNinja/issues/136)
- HTTP basic auth credentials not stored [\#132](https://github.com/pliablepixels/zmNinja/issues/132)
- Android build fails [\#130](https://github.com/pliablepixels/zmNinja/issues/130)
- \[DESKTOP\]\[QUESTION\] gconf [\#125](https://github.com/pliablepixels/zmNinja/issues/125)
- CSS montage - implement a better reflow algorithm [\#124](https://github.com/pliablepixels/zmNinja/issues/124)
- Auto upload successful build to testfairy [\#75](https://github.com/pliablepixels/zmNinja/issues/75)
- Integrate with Travis [\#72](https://github.com/pliablepixels/zmNinja/issues/72)
- When moving montage monitors around, remember to move the size  [\#16](https://github.com/pliablepixels/zmNinja/issues/16)

## [v1.0.2](https://github.com/pliablepixels/zmNinja/tree/v1.0.2) (2015-12-28)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v1.0.1...v1.0.2)

**Implemented enhancements:**

- Implement a way to only play alarmed frames [\#118](https://github.com/pliablepixels/zmNinja/issues/118)

## [v1.0.1](https://github.com/pliablepixels/zmNinja/tree/v1.0.1) (2015-12-27)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.87.3...v1.0.1)

**Implemented enhancements:**

- Add an option to play at real FPS in single monitor view [\#123](https://github.com/pliablepixels/zmNinja/issues/123)
- Offer a server selection menu on app launch [\#122](https://github.com/pliablepixels/zmNinja/issues/122)
- Add a stop button to PTZ [\#121](https://github.com/pliablepixels/zmNinja/issues/121)
- Pack in the montage view better [\#119](https://github.com/pliablepixels/zmNinja/issues/119)
- Truncate monitor name in montage if size of image is less [\#117](https://github.com/pliablepixels/zmNinja/issues/117)

**Fixed bugs:**

- Developer setting for Frame Update allows decimals  [\#114](https://github.com/pliablepixels/zmNinja/issues/114)

**Closed issues:**

- HTTP Basic authentication [\#120](https://github.com/pliablepixels/zmNinja/issues/120)
- Cannot get video [\#115](https://github.com/pliablepixels/zmNinja/issues/115)

## [v0.87.3](https://github.com/pliablepixels/zmNinja/tree/v0.87.3) (2015-12-15)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.87.2...v0.87.3)

**Implemented enhancements:**

- Add ability to detect cgi-bin configuration issues \(experimental\) [\#110](https://github.com/pliablepixels/zmNinja/issues/110)
- Allow 'show all/show alarmed' events to persist and show menu option in both Events and Timeline Views [\#108](https://github.com/pliablepixels/zmNinja/issues/108)
- Make timeline items configurable instead of forcing 200 [\#104](https://github.com/pliablepixels/zmNinja/issues/104)

**Fixed bugs:**

- popover "..." menu in event and timeline does not show in certain scenarios - so no menu [\#109](https://github.com/pliablepixels/zmNinja/issues/109)
- Disabling event server does not disable push notifications via APNS/GCM [\#107](https://github.com/pliablepixels/zmNinja/issues/107)
- Quick scrub on devices \(atleast iOS\) does not stop if you tap [\#106](https://github.com/pliablepixels/zmNinja/issues/106)
- Bulk frames are causing problems with the scrub bar positioning of alarmed frames [\#102](https://github.com/pliablepixels/zmNinja/issues/102)
- Gapless playback showing events from non-persisted monitors [\#86](https://github.com/pliablepixels/zmNinja/issues/86)

**Closed issues:**

- Timeline on v0.87.2 shows only motion events [\#105](https://github.com/pliablepixels/zmNinja/issues/105)

## [v0.87.2](https://github.com/pliablepixels/zmNinja/tree/v0.87.2) (2015-11-20)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.87...v0.87.2)

## [v0.87](https://github.com/pliablepixels/zmNinja/tree/v0.87) (2015-11-20)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.87.1...v0.87)

**Fixed bugs:**

- Tap to load events on push notification is broken [\#103](https://github.com/pliablepixels/zmNinja/issues/103)
- Monitors in zmNinja should respect sequence of monitors in Zoneminder [\#100](https://github.com/pliablepixels/zmNinja/issues/100)
- SavetoPhone not working [\#99](https://github.com/pliablepixels/zmNinja/issues/99)
- 0.87.1 broke quick scrub thumbnail [\#98](https://github.com/pliablepixels/zmNinja/issues/98)
- \[DESKTOP\] Image scaling issues [\#90](https://github.com/pliablepixels/zmNinja/issues/90)

**Closed issues:**

- \[DESKTOP\] Timeline is UTC [\#101](https://github.com/pliablepixels/zmNinja/issues/101)
- \[DESKTOP\] Lift 200 last entries limit for timeline [\#88](https://github.com/pliablepixels/zmNinja/issues/88)

## [v0.87.1](https://github.com/pliablepixels/zmNinja/tree/v0.87.1) (2015-11-18)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.86...v0.87.1)

**Implemented enhancements:**

- Event page is overcrowded for mocord users - add option to show only alarmed frames [\#89](https://github.com/pliablepixels/zmNinja/issues/89)
- Ability to specify multiple ZM servers and switch between them [\#83](https://github.com/pliablepixels/zmNinja/issues/83)
- add per monitor 'alarmed' status indicator to montage view [\#82](https://github.com/pliablepixels/zmNinja/issues/82)

**Fixed bugs:**

- zmNinja adds cgi-bin on its own to cgi path. This is a problem for Centos  [\#92](https://github.com/pliablepixels/zmNinja/issues/92)
- Can't toggle gapless playback when viewing timeline events  [\#85](https://github.com/pliablepixels/zmNinja/issues/85)
- desktop app no video from timeline [\#70](https://github.com/pliablepixels/zmNinja/issues/70)

**Closed issues:**

- Breaking changes for this release: [\#97](https://github.com/pliablepixels/zmNinja/issues/97)
- Zoneminder specific notes for this release  [\#96](https://github.com/pliablepixels/zmNinja/issues/96)
- Increase desktop limit of timeline to 2000 events instead of 200 [\#95](https://github.com/pliablepixels/zmNinja/issues/95)
- Implement daily version check for Desktop versions [\#94](https://github.com/pliablepixels/zmNinja/issues/94)
- eliminate duplicate code between timeline and event control for footage mode [\#87](https://github.com/pliablepixels/zmNinja/issues/87)
- Non-persisted monitors showing in timeline, events views [\#84](https://github.com/pliablepixels/zmNinja/issues/84)
- Clean up persistent data storage mechanism [\#81](https://github.com/pliablepixels/zmNinja/issues/81)
- Remove external deps from codebase [\#80](https://github.com/pliablepixels/zmNinja/issues/80)
- Update .gitignore to support osx [\#78](https://github.com/pliablepixels/zmNinja/issues/78)
- Welcome message on first start [\#76](https://github.com/pliablepixels/zmNinja/issues/76)
- add contributing guidelines [\#74](https://github.com/pliablepixels/zmNinja/issues/74)
- Add License [\#73](https://github.com/pliablepixels/zmNinja/issues/73)
- desktop app, can't export logs [\#71](https://github.com/pliablepixels/zmNinja/issues/71)
- make email logs work in desktop mode by opening default client [\#69](https://github.com/pliablepixels/zmNinja/issues/69)
- in quick scrub/footage mode - start playing without waiting for a tap [\#68](https://github.com/pliablepixels/zmNinja/issues/68)
- make mouse wheel work in desktop mode [\#67](https://github.com/pliablepixels/zmNinja/issues/67)

**Merged pull requests:**

- prevents checkin of unessicary file from osx [\#79](https://github.com/pliablepixels/zmNinja/pull/79) ([jsloyer](https://github.com/jsloyer))
- move license file to correct filename [\#77](https://github.com/pliablepixels/zmNinja/pull/77) ([jsloyer](https://github.com/jsloyer))

## [v0.86](https://github.com/pliablepixels/zmNinja/tree/v0.86) (2015-11-06)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.85...v0.86)

**Implemented enhancements:**

- Make Back button to exit from live view [\#61](https://github.com/pliablepixels/zmNinja/issues/61)
- ability to run all screens of zmNinja on a desktop without console errors [\#59](https://github.com/pliablepixels/zmNinja/issues/59)
- In playback mode, add the ability to swipe to the next event of whichever monitor has the next event and/or initiate gapless playback of same. [\#49](https://github.com/pliablepixels/zmNinja/issues/49)
- In playback mode, add the ability to swipe to the next event of the same monitor and/or initiate gapless playback. [\#48](https://github.com/pliablepixels/zmNinja/issues/48)

**Fixed bugs:**

- tapping on events before they complete causes issues [\#44](https://github.com/pliablepixels/zmNinja/issues/44)

**Closed issues:**

- If swiping is enabled, don't swipe if image is zoomed in -- causes pan/zoom conflicts [\#66](https://github.com/pliablepixels/zmNinja/issues/66)
- getDiskStatus seems to be a performance bottleneck - disable for now in System State screen [\#65](https://github.com/pliablepixels/zmNinja/issues/65)
- clean up non-reachable code during portal check [\#64](https://github.com/pliablepixels/zmNinja/issues/64)

## [v0.85](https://github.com/pliablepixels/zmNinja/tree/v0.85) (2015-11-01)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.84...v0.85)

**Implemented enhancements:**

- video branch support for zmNinja  [\#60](https://github.com/pliablepixels/zmNinja/issues/60)
- changing servers requires reload of monitors - should be automatically done [\#58](https://github.com/pliablepixels/zmNinja/issues/58)

**Fixed bugs:**

- fix version check - in one part of the code, I'm not doing a \>= check resulting in new ZM versions failing [\#57](https://github.com/pliablepixels/zmNinja/issues/57)
- notifications delivered while the app is running should also produce the same sound [\#55](https://github.com/pliablepixels/zmNinja/issues/55)
- iOS notifications are not showing style and sound options [\#54](https://github.com/pliablepixels/zmNinja/issues/54)

**Closed issues:**

- permissions on Android [\#56](https://github.com/pliablepixels/zmNinja/issues/56)

## [v0.84](https://github.com/pliablepixels/zmNinja/tree/v0.84) (2015-10-28)
[Full Changelog](https://github.com/pliablepixels/zmNinja/compare/v0.83...v0.84)

**Implemented enhancements:**

- offer an option to force web sockets even if push is supported [\#53](https://github.com/pliablepixels/zmNinja/issues/53)
- customize screen to load on push notification tap [\#47](https://github.com/pliablepixels/zmNinja/issues/47)

**Fixed bugs:**

- Ssl toggle and https in login [\#52](https://github.com/pliablepixels/zmNinja/issues/52)
- Swiping to the left should reveal next monitor, not prev monitor \(seen on iOS 9\) [\#51](https://github.com/pliablepixels/zmNinja/issues/51)
- rev 0.83, event icon is a solid block [\#50](https://github.com/pliablepixels/zmNinja/issues/50)
- Monitor view: events not showing for deselected monitors \(and should since the goal in monitor view is to see all monitors which would include their events\). 	 	 [\#46](https://github.com/pliablepixels/zmNinja/issues/46)
- Montage view: swipe shows deselected monitors \(and should not\). [\#45](https://github.com/pliablepixels/zmNinja/issues/45)
- Timeline more menu bonked again [\#43](https://github.com/pliablepixels/zmNinja/issues/43)

**Closed issues:**

- custom range dates shown even if pullup overwrites them [\#37](https://github.com/pliablepixels/zmNinja/issues/37)
- Latest Events panel doesn't initialize correctly on first use. [\#36](https://github.com/pliablepixels/zmNinja/issues/36)
- Android client: System Status view returns HTTP error [\#32](https://github.com/pliablepixels/zmNinja/issues/32)
- app causes ZM crash/bad behavior after it's been asleep for a while [\#30](https://github.com/pliablepixels/zmNinja/issues/30)

## [v0.83](https://github.com/pliablepixels/zmNinja/tree/v0.83) (2015-10-24)
**Implemented enhancements:**

- ability to restrict monitors in all views - depending on some global selection [\#42](https://github.com/pliablepixels/zmNinja/issues/42)
- make it optional to swipe between live view of monitors [\#41](https://github.com/pliablepixels/zmNinja/issues/41)
- review security approach - switch to auth token instead of passing u+p in url [\#2](https://github.com/pliablepixels/zmNinja/issues/2)

**Fixed bugs:**

- if apis can't be reached the app assumes version is 0.0.0 and moves app to low version screen [\#40](https://github.com/pliablepixels/zmNinja/issues/40)
- Check multiple web sockets created in android -- seems old web sockets don't get deleted [\#39](https://github.com/pliablepixels/zmNinja/issues/39)
- Background mode: Popover menus stick around [\#33](https://github.com/pliablepixels/zmNinja/issues/33)

**Closed issues:**

- Monitor change makes enabled 0 [\#38](https://github.com/pliablepixels/zmNinja/issues/38)
- Restarting ZM in state control results in client freezing [\#35](https://github.com/pliablepixels/zmNinja/issues/35)
- radial menu is broken [\#34](https://github.com/pliablepixels/zmNinja/issues/34)
- monitor buttons to navigate can overlap exit,zoom,refresh buttons [\#31](https://github.com/pliablepixels/zmNinja/issues/31)
- pinch zoom on monitor too sensitive, detects false swipes [\#29](https://github.com/pliablepixels/zmNinja/issues/29)
- Montage re-order does not work with large list of monitors [\#28](https://github.com/pliablepixels/zmNinja/issues/28)
- investigate when timeline barfs with a "no parent" error [\#27](https://github.com/pliablepixels/zmNinja/issues/27)
- zmNinja should give a useful warning when the API is non-functional [\#25](https://github.com/pliablepixels/zmNinja/issues/25)
- apk Download of zmNinja [\#22](https://github.com/pliablepixels/zmNinja/issues/22)
- Add destroy to each view and cancel all view timers again there just to make sure [\#21](https://github.com/pliablepixels/zmNinja/issues/21)
- Add random string recalc every 1 sec to monitor view [\#20](https://github.com/pliablepixels/zmNinja/issues/20)
- Long press on android to increase individual montage size does not work [\#19](https://github.com/pliablepixels/zmNinja/issues/19)
- white screen on idle during playback [\#17](https://github.com/pliablepixels/zmNinja/issues/17)
- make sure image works if an autologin happens in the background [\#15](https://github.com/pliablepixels/zmNinja/issues/15)
- settings UI - keep hints always on top [\#14](https://github.com/pliablepixels/zmNinja/issues/14)
- skip disabled monitors in montage view [\#13](https://github.com/pliablepixels/zmNinja/issues/13)
- how to install your application? [\#12](https://github.com/pliablepixels/zmNinja/issues/12)
- Implement a way to do a sanity check on the input and inform the user if the paths are wrong [\#11](https://github.com/pliablepixels/zmNinja/issues/11)
- come up with a clean input box to make sure I account for various API/base path install combos [\#10](https://github.com/pliablepixels/zmNinja/issues/10)
- Implement event filtering for graph generation - last hr/week/month [\#9](https://github.com/pliablepixels/zmNinja/issues/9)
- Android: Montage screen - scaling is not correct [\#8](https://github.com/pliablepixels/zmNinja/issues/8)
- Android: Http problem [\#7](https://github.com/pliablepixels/zmNinja/issues/7)
- When images are loaded over a slow connection, there is a white screen till it loads [\#6](https://github.com/pliablepixels/zmNinja/issues/6)
- handle situations when zms does not respond to your commands for a while [\#5](https://github.com/pliablepixels/zmNinja/issues/5)
- test product on Android - make sure all plugins work etc. [\#4](https://github.com/pliablepixels/zmNinja/issues/4)
- we are only retrieving the first page of events - need to fix it to get all  [\#1](https://github.com/pliablepixels/zmNinja/issues/1)

**Merged pull requests:**

- Build docs [\#24](https://github.com/pliablepixels/zmNinja/pull/24) ([bklang](https://github.com/bklang))
- Add additional JS build dependencies [\#23](https://github.com/pliablepixels/zmNinja/pull/23) ([bklang](https://github.com/bklang))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
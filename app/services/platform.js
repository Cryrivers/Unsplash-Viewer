import Ember from 'ember';
import platform from '../utils/platform';

export default Ember.Service.extend({
  initPlatformClassNames() {
    const htmlTagClassList = document.querySelector('html').classList;
    const bodyTagClassList = document.querySelector('body').classList;
    if (platform.isCordova()) {
      bodyTagClassList.add('platform-cordova');
      if (platform.isiOS()) {
        bodyTagClassList.add('platform-ios');
      }
      else if (platform.isAndroid()) {
        bodyTagClassList.add('platform-android');
      }
    } else if (platform.isElectron()) {
      bodyTagClassList.add('platform-electron');
      // Do some class name bindings
      const remote = window.requireNode('electron').remote;
      const browserWindow = remote.getCurrentWindow();
      browserWindow.removeAllListeners();
      // Bind onFocus and onBlur event
      browserWindow.on('focus', ()=> {
        htmlTagClassList.remove('is-blurred');
      });
      browserWindow.on('blur', ()=> {
        htmlTagClassList.add('is-blurred');
      });

      if (platform.isWindows()) {
        bodyTagClassList.add('platform-windows');
      }
      else if (platform.isLinux()) {
        bodyTagClassList.add('platform-linux');
      }
      else if (platform.isMacOSX()) {
        bodyTagClassList.add('platform-macosx');
      }
    } else {
      bodyTagClassList.add('platform-browser');
    }
  },
  cordova: Ember.computed(function() {
    return platform.isCordova();
  }),
  iOS: Ember.computed(function() {
    return platform.isiOS();
  }),
  android: Ember.computed(function() {
    return platform.isAndroid();
  }),
  electron: Ember.computed(function() {
    return platform.isElectron();
  }),
  windows: Ember.computed(function() {
    return platform.isWindows();
  }),
  linux: Ember.computed(function() {
    return platform.isLinux();
  }),
  macOSX: Ember.computed(function() {
    return platform.isMacOSX();
  }),
  browser: Ember.computed(function() {
    return platform.isBrowser();
  })
});

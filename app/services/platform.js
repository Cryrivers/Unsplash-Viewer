import Ember from 'ember';

export default Ember.Service.extend({
  initPlatformClassNames() {
    const htmlTagClassList = document.querySelector('html').classList;
    const bodyTagClassList = document.querySelector('body').classList;
    if (this.get('isCordova')) {
      bodyTagClassList.add('platform-cordova');
      if (this.get('isiOS')) {
        bodyTagClassList.add('platform-ios');
      }
      else if (this.get('isAndroid')) {
        bodyTagClassList.add('platform-android');
      }
    } else if (this.get('isElectron')) {
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

      if (this.get('isWindows')) {
        bodyTagClassList.add('platform-windows');
      }
      else if (this.get('isLinux')) {
        bodyTagClassList.add('platform-linux');
      }
      else if (this.get('isMacOSX')) {
        bodyTagClassList.add('platform-macosx');
      }
    } else {
      bodyTagClassList.add('platform-browser');
    }
  },
  isCordova: Ember.computed(function() {
    return Boolean(window.cordova);
  }),
  isiOS: Ember.computed(function() {
    if (window.cordova) {
      return window.cordova.platformId === 'ios';
    }
    return false;
  }),
  isAndroid: Ember.computed(function() {
    if (window.cordova) {
      return window.cordova.platformId === 'android';
    }
    return false;
  }),
  isElectron: Ember.computed(function() {
    return Boolean(window.ELECTRON);
  }),
  isWindows: Ember.computed(function() {
    if (window.ELECTRON) {
      const process = window.requireNode('process');
      return process.platform === 'win32';
    }
    return false;
  }),
  isLinux: Ember.computed(function() {
    if (window.ELECTRON) {
      const process = window.requireNode('process');
      return process.platform === 'linux';
    }
    return false;
  }),
  isMacOSX: Ember.computed(function() {
    if (window.ELECTRON) {
      const process = window.requireNode('process');
      return process.platform === 'darwin';
    }
    return false;
  }),
  isBrowser: Ember.computed('isCordova', 'isElectron', function() {
    const isCordova = this.get('isCordova');
    const isElectron = this.get('isElectron');
    return !isCordova && !isElectron;
  })
});

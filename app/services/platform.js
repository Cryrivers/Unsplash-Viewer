import Ember from 'ember';

export default Ember.Service.extend({
  initPlatformClassNames() {
    const htmlTagClassList = document.querySelector('html').classList;
    if (this.get('isCordova')) {
      htmlTagClassList.add('platform-cordova');
    }
    if (this.get('isiOS')) {
      htmlTagClassList.add('platform-ios');
    }
    if (this.get('isAndroid')) {
      htmlTagClassList.add('platform-android');
    }
    if (this.get('isElectron')) {
      htmlTagClassList.add('platform-electron');
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
    }
    if (this.get('isWindows')) {
      htmlTagClassList.add('platform-windows');
    }
    if (this.get('isLinux')) {
      htmlTagClassList.add('platform-linux');
    }
    if (this.get('isMacOSX')) {
      htmlTagClassList.add('platform-macosx');
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
  })
});

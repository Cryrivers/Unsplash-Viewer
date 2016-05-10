import Ember from 'ember';

export default Ember.Service.extend({
  initPlatformClassNames() {
    const htmlTagClassList = document.querySelector('html').classList;
    if (this.get('isiOS')) {
      htmlTagClassList.add('platform-ios');
    }
    if (this.get('isAndroid')) {
      htmlTagClassList.add('platform-android');
    }
    if (this.get('isElectron')) {
      htmlTagClassList.add('platform-electron');
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
  isiOS: Ember.computed(function() {
    return false;
  }),
  isAndroid: Ember.computed(function() {
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

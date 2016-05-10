import Ember from 'ember';

export default Ember.Service.extend({
  initPlatformClassNames() {
    const htmlTagClassList = document.querySelector('html').classList;
    if (this.iOS()) {
      htmlTagClassList.add('platform-ios');
    }
    if (this.isAndroid()) {
      htmlTagClassList.add('platform-android');
    }
    if (this.isElectron()) {
      htmlTagClassList.add('platform-electron');
    }
    if (this.isWindows()) {
      htmlTagClassList.add('platform-windows');
    }
    if (this.isLinux()) {
      htmlTagClassList.add('platform-linux');
    }
    if (this.isMacOSX()) {
      htmlTagClassList.add('platform-macosx');
    }
  },
  iOS() {
    return false;
  },
  isAndroid() {
    return false;
  },
  isElectron() {
    return Boolean(window.ELECTRON);
  },
  isWindows() {
    if (window.ELECTRON) {
      const process = window.requireNode('process');
      return process.platform === 'win32';
    }
    return false;
  },
  isLinux() {
    if (window.ELECTRON) {
      const process = window.requireNode('process');
      return process.platform === 'linux';
    }
    return false;
  },
  isMacOSX() {
    if (window.ELECTRON) {
      const process = window.requireNode('process');
      return process.platform === 'darwin';
    }
    return false;
  }
});

export default {
  isCordova() {
    return Boolean(window.cordova);
  },
  isiOS() {
    if (window.cordova) {
      return window.cordova.platformId === 'ios';
    }
    return false;
  },
  isAndroid() {
    if (window.cordova) {
      return window.cordova.platformId === 'android';
    }
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
  },
  isBrowser() {
    return !window.cordova && !window.ELECTRON;
  }
};

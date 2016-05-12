import Ember from 'ember';

const currentBrowserWindow = window.requireNode('electron').remote.getCurrentWindow();

export default Ember.Component.extend({
  classNames: ['window-buttons'],
  actions: {
    minimize() {
      currentBrowserWindow.minimize();
    },
    maximize() {
      if (currentBrowserWindow.isMaximized()) {
        currentBrowserWindow.unmaximize();
      } else {
        currentBrowserWindow.maximize();
      }
    },
    close() {
      currentBrowserWindow.close();
    }
  }
});

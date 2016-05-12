import Ember from 'ember';

const currentBrowserWindow = window.requireNode('electron').remote.getCurrentWindow();

export default Ember.Component.extend({
  classNames: ['window-buttons'],
  actions: {
    minimize() {
      currentBrowserWindow.minimize();
    },
    maximize() {
      currentBrowserWindow.isMaximized() ? currentBrowserWindow.unmaximize() : currentBrowserWindow.maximize();
    },
    close() {
      currentBrowserWindow.close();
    }
  }
});

import Ember from 'ember';
const {inject} = Ember;

const html = document.querySelector('html');

export default Ember.Controller.extend({
  platform: inject.service(),
  _currentRouteNameDidChange: Ember.observer('currentRouteName', function() {
    const routePath = this.get('currentRouteName').split('.');
    let classNames = [];
    routePath.forEach((path, i) => {
      if (path === 'index') {
        return;
      }
      classNames.push(`${routePath[i - 1] ? classNames[i - 1] : 'route'}-${path}`);
    });
    html.className = html.className.replace(/\sroute\S*/g, '') + ' ' + (classNames.length ? classNames.join(' ') : 'route-index');
  }),
  init(...args) {
    this._super(...args);
    this.get('platform').initPlatformClassNames();
  },
  actions: {
    shoot() {
      navigator.camera.getPicture(()=> {
        alert('This button actually does nothing but take a photo.');
        navigator.camera.cleanup();
      });
    }
  }
});

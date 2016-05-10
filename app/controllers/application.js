import Ember from 'ember';
const {inject} = Ember;
export default Ember.Controller.extend({
  platform: inject.service(),
  init(...args) {
    this._super(...args);
    this.get('platform').initPlatformClassNames();
  }
});

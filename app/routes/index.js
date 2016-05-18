import Ember from 'ember';

export default Ember.Route.extend({
  activate() {
    if (window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  }
});

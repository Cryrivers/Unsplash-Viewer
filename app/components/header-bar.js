import Ember from 'ember';

export default Ember.Component.extend({
  platform: Ember.inject.service(),
  classNames: ['header-bar']
});

import Ember from 'ember';
import {task} from 'ember-concurrency';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  queryParams: ['page', 'perPage', 'orderBy'],
  page: 1,
  perPage: 30,
  orderBy: 'latest',
  loading: false,
  pageLoadingTask: task(function*() {
    const {page, perPage, orderBy} = this.getProperties(['page', 'perPage', 'orderBy']);
    this.set('loading', true);
    const result = yield this.get('ajax').request(`photos/?client_id=5fd91b136e4efb29a0dd3253debb6e4ed374473ba82923592809541ae96ee003&page=${page}&per_page=${perPage}&order_by=${orderBy}`);
    this.set('model', result);
    this.set('loading', false);
  }).restartable(),
  pageChangeObserver: Ember.observer('orderBy', function() {
    this.get('pageLoadingTask').perform();
  }),
  init(...args) {
    this._super(...args);
    this.get('pageLoadingTask').perform();
  },
  actions: {
    goToDetailByImage(image) {
      return this.transitionToRoute('detail', image.id);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  queryParams: {
    page: {
      refreshModel: true
    },
    perPage: {
      refreshModel: true
    },
    orderBy: {
      refreshModel: true
    }
  },
  model(params) {
    return this.get('ajax').request(`photos/?client_id=5fd91b136e4efb29a0dd3253debb6e4ed374473ba82923592809541ae96ee003&page=${params.page}&per_page=${params.perPage}&order_by=${params.orderBy}`);
  }
});

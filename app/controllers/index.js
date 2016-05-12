import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'perPage', 'orderBy'],
  page: 1,
  perPage: 30,
  orderBy: 'latest',
  actions: {
    visitDetailPage(id) {
      this.transitionToRoute('detail', id);
    }
  }
});

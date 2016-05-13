import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'perPage', 'orderBy'],
  page: 1,
  perPage: 30,
  orderBy: 'latest',
  actions: {
    goToDetailByImage(image) {
      return this.transitionToRoute('detail', image.id);
    }
  }
});

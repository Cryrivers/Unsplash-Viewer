import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['picture-grid'],
  classNameBindings: ['loading:picture-grid--loading'],
  loading: false,
  actions: {
    redirectToDetail(image) {
      this.set('loading', true);
      return this.attrs.goToDetail(image).finally(()=> {
        this.set('loading', false);
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['picture-grid__item'],
  classNameBindings: ['loading:picture-grid__item--loading'],
  loading: false,
  actions: {
    imageClicked() {
      const image = this.get('image');
      this.set('loading', true);
      this.attrs.redirectToDetail(image).finally(()=> {
        this.set('loading', false);
      });
    }
  }
});

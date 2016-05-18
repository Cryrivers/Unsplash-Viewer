import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['shakeable-image'],
  classNameBindings: ['shaking:shakeable-image--shaking'],
  url: '',
  timestamp: Date.now(),
  _url: Ember.computed('url', 'timestamp', function() {
    const {url, timestamp} = this.getProperties(['url', 'timestamp']);
    return `${url}#_=${timestamp}`;
  }),
  shaking: false,
  didInsertElement() {
    this.$('img').on('load', ()=> {
      this.set('shaking', false);
    });
    document.addEventListener('deviceready', ()=> {
      window.shake.startWatch(()=> {
        if (!this.get('shaking')) {
          this.set('timestamp', Date.now());
          this.set('shaking', true);
        }
      }, 20);
    });
  },
  willDestroyElement() {
    this.$('img').off('load');
    if (window.shake) {
      window.shake.stopWatch();
    }
  }
});

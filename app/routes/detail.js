import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      id: params.id,
      url: `https://source.unsplash.com/${params.id}/1600x900`
    };
    // return new Ember.RSVP.Promise((resolve)=> {
    //   const url = `https://source.unsplash.com/${params.id}/1600x900`;
    //   const preloadImage = new Image();
    //   preloadImage.onload = function() {
    //     resolve({
    //       id: params.id,
    //       url
    //     });
    //   };
    //   preloadImage.src = url;
    // });
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params) {
    return {
      id: params.id,
      url:`https://source.unsplash.com/${params.id}/1600x900`
    };
    /*
    return new Ember.RSVP.Promise((resolve)=> {
      fetch(`https://source.unsplash.com/${params.id}/1600x900`).then((response)=> {
        response.blob().then((blobResult)=> {
          resolve({
            id: params.id,
            url: URL.createObjectURL(blobResult)
          });
        });
      });
    });
   */
  }
});

/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    svg: {
      optimize: {
        plugins: [
          {
            removeSeveralAttrs: {
              type: 'perItem',
              fn: function(item) {
                item.eachAttr(function(attr) {
                  if (attr.name === 'id') {
                    item.removeAttr('id');
                  }
                });
              }
            }
          },
          {
            removeTitle: true
          },
          {
            removeAttrs: true
          }
        ]
      },
      paths: [
        'svg'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/normalize-css/normalize.css');

  return app.toTree();
};

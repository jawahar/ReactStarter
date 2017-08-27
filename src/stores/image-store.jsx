var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],         // this store must listen to all action defined in actions.jsx
                                  // invoke the method 'getImages()' if the action 'getImages' is invoked
  getImages: function(topicId) {
      Api.get('topics/' + topicId) // returns a promise which can invoke a function with the response
      .then(function(response) {
        this.images = _.reject(response.data, function(image) {
          // reject will reject the image if this function returns true
          return image.is_album;
        });
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    // trigger a DOM change using Reflux's trigger method
    this.trigger('change', this.images)
  }
});

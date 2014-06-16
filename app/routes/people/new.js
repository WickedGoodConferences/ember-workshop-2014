import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('person');
  },
  actions: {
    create: function() {
      var routeContext = this;

      this.controller.get('model').save().then(function() {
        routeContext.transitionTo('people');
      });
    }
  },
  deactivate: function() {
    var model = this.get('controller.model');
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  }
});

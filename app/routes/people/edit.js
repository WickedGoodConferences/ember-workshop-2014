import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('person', params.person_id);
  },
  actions: {
    update: function() {
      var routeContext = this;
      var model = this.get('controller.model');

      model.save().then(function() {
        routeContext.transitionTo('people.show', model);
      });
    }
  },
  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
  }
});

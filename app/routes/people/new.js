import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('person');
  },
  actions: {
    create: function() {
      this.transitionTo('people');
    }
  }
});

import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WgeWorkshopENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('people', function() {
    this.route('new');
    this.route('show', {path: ':person_id'});
  });
});

export default Router;

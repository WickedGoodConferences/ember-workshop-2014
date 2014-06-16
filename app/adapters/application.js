/* globals Firebase */

import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://blinding-fire-2081.firebaseio.com')
});

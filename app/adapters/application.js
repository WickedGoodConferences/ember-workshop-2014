import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://jsonstub.com',
  headers: {
    'JsonStub-User-Key': 'b7433efe-9f79-404d-aeee-792ae556d642',
    'JsonStub-Project-Key': 'f5d6a6a1-42ac-472b-a35f-a9bdfa04c993'
  }
});

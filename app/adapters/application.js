import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://jsonstub.com',
  headers: {
    'JsonStub-User-Key': '7c0aa2bd-0691-434e-87eb-fafadd342ba2',
    'JsonStub-Project-Key': 'f5d6a6a1-42ac-472b-a35f-a9bdfa04c993'
  }
});

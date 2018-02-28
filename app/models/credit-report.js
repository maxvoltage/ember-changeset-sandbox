import DS from 'ember-data';

const { Model, attr } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  dob: attr('string')
});

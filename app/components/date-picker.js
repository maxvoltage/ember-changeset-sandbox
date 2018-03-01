import Component from '@ember/component';
import EmberObject, { get, getProperties, set, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import DateValidations from 'sandbox/validations/date';

export default Component.extend({
  store: service(),

  _changeset: null,
  changeset: null,
  model: null,
  onValidate: null,
  tagName: 'fieldset',

  formattedDate: computed('model.{day,month,year}', function() {
    let model = get(this, 'model');
    let { month, day, year } = getProperties(model, ['month', 'day', 'year']);
    if (month && day && year) {
      // only return formatted form when all values are not undefined
      return `${month}/${day}/${year}`;
    } else {
      return '';
    }
  }),

  init() {
    this._super(...arguments);

    const store = get(this, 'store');
    let model = store.createRecord('date');

    let validatorFn = lookupValidator(DateValidations);
    let changeset = new Changeset(
      model,
      validatorFn,
      DateValidations,
      { skipValidate: true }
    );

    set(this, '_changeset', changeset);
    set(this, 'model', model);
  },

  actions: {
    validate(changeset, field) {
      let hasChanges = changeset.get(`change.${field}`) ? true : false;
      if (hasChanges) {
        changeset.validate(field).then(() => {
          let onValidate = get(this, 'onValidate');
          let isValid = changeset.get('isValid');
          if (isValid) {
            changeset.execute();
            // now update the parent changesets dob value
            let date = get(this, 'formattedDate');
            let onMutate = get(this, 'onMutate');
            if (typeof onMutate === 'function') onMutate(date);
          }
        });
      }
    }
  }
});

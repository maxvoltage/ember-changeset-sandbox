import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import CreditProfileValidations from 'sandbox/validations/credit-report';

export default Controller.extend({
  creditReport: alias('model'),
  Validations: computed(() => {
    return CreditProfileValidations;
  }),

  actions: {
    submit(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.execute();
          let model = changeset.get('_content');
          alert(JSON.stringify(model.toJSON()));
        }
      });
    },
  }
});

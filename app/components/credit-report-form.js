import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  changeset: null,
  model: null,
  tagName: 'fieldset',

  actions: {
    onMutate(property, key, value) {
      let changeset = get(this, 'changeset');
      changeset.set('dob', value);
      changeset.validate('dob');
    }
  }
});

import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Route.extend({
  creditReport: alias('model'),

  async model() {
    const store = get(this, 'store');
    let model = await store.createRecord('credit-report', {
      firstName: 'bob'
    });
    return model;
  },

  deactivate() {
    let store = get(this, 'store');
    let model = get(this, 'creditReport');
    // `model()` creates an empty model and sets it to the changeset, this
    // creates an Ember Data model that'll be listed on the index route if the
    // user aborts adding a new one, so we call rollbackAttributes to cleanup
    // any unsaved models.
    // `creditReport` was never saved, cleanup empty model.
    // model.rollbackAttributes();
  }
});

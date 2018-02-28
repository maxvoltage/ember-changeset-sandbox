import { computed } from '@ember/object';
import {
  validateFormat,
  validatePresence,
  validateNumber,
  validateLength
} from 'ember-changeset-validations/validators';
// import moment from 'moment';
// import validateDate from 'sandbox/validators/date';

export default {
  firstName: [
    validatePresence(true),
    validateLength({
      min: 3,
      max: 10
    })
  ],
  lastName: [
    validatePresence(true),
    validateLength({
      min: 3,
      max: 10
    })
  ],
  dob: [
    validateFormat({
      /* prevent years like 0070 from converting to 1970 */
      regex: /^\d{1,2}\/\d{1,2}\/[1-2][0-9]{3,3}/
    })
  ]
};

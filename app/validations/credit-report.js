import {
  validateFormat,
  validatePresence,
  validateNumber,
  validateLength
} from 'ember-changeset-validations/validators';

export default {
  firstName: [
    validatePresence(true),
    validateLength({
      allowBlank: false,
      min: 3,
      max: 10
    })
  ],
  lastName: [
    validatePresence(true),
    validateLength({
      allowBlank: false,
      min: 3,
      max: 10
    })
  ],
  dob: [
    validatePresence(true),
    validateLength({
      allowBlank: false,
      min: 8,
      max: 10
    }),
    validateFormat({
      /* prevent years like 0070 from converting to 1970 */
      /* only allow births from 1000-2999 */
      regex: /^\d{1,2}\/\d{1,2}\/[1-2][0-9]{2,2}/
    })
  ]
};

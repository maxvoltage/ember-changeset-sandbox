# sandbox

`ember-changeset` sandbox.

## all-in-one validation

[master](https://github.com/0xadada/ember-sandbox/tree/master) branch contains
a repo doing default (all-in-one) validation that occurs
when any changes are made to any field. In this case, the changeset is invalid
but only shows errors for fields that haven't been touched (`isPristine`).

## incremental-validation

The [incremental
validation](https://github.com/0xadada/ember-sandbox/tree/incremental-validation)
branch uses a custom validator function to only validate the currently-focused
field upon `onBlur` event. This allows for progressive disclosure of validation
errors.


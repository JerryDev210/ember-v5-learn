import { setupTest } from 'ember-v5/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('rental', {});
    assert.ok(model, 'model exists');
  });
});

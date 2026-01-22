import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-v5/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);
    await render(hbs`<Jumbo />`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo .tomster').exists();
  });
});

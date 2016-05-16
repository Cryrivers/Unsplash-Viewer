import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('picture-detail-viewer', 'Integration | Component | picture detail viewer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{picture-detail-viewer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#picture-detail-viewer}}
      template block text
    {{/picture-detail-viewer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button'

describe('button', () => {
  it(': renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<spd-button></spd-button>`,
    });
    expect(page.root).toEqualHtml(
        `<spd-button aria-disabled="false" class="default" role="button" type="button">
            <mock:shadow-root>
                <slot></slot>
            </mock:shadow-root>
        </spd-button>`
    );
  });
})

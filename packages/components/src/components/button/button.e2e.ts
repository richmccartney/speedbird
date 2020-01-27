import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('button', () => {
  let page: E2EPage;
  let element: E2EElement;

  beforeEach(async () => {
    page = await newE2EPage({
      html: `<spd-button></spd-button>`
    });
    element = await page.find('spd-button');
  });

  it(': renders', async () => {
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveAttribute('role', 'button');
  });

  it(': renders as an anchor', async () => {
    const anchorPage = await newE2EPage();

    await anchorPage.setContent('<spd-button href="#">Button</button>');
    const anchorEl = await anchorPage.find('spd-button');
    expect(anchorEl).toHaveAttribute('role', 'link');
    expect(anchorEl).toBeTruthy();
  });

  describe(': click event', () => {
    let clickPage: E2EPage;
    let clickEl: E2EElement;
    const mockCallBack = jest.fn();

    beforeEach(async () => {
      clickPage = await newE2EPage({
        html: `<spd-button onclick="${mockCallBack()}"></spd-button>`
      });
      clickEl = await clickPage.find('spd-button');
    });

    it(': clicked', async () => {
      await clickEl.click();
      await clickPage.waitForChanges();

      expect(mockCallBack).toHaveBeenCalled();
    });

    it(': disabled', async () => {
      clickEl.setProperty('disabled', true);
      await clickPage.waitForChanges();
      const buttonEl = await clickPage.find('spd-button');
      expect(buttonEl).toHaveAttribute('disabled');
    });
  });
});

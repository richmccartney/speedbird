import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'spd-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button implements ComponentInterface {
  
  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ 
    reflect: true, 
    attribute: 'disabled'
  }) disabled = false;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop({ 
    reflect: true, 
    attribute: 'href'
  }) href?: string;

  /**
   * Sets the ID of the button element
   */
  @Prop({
    reflect: true,
    attribute: 'id'
  }) buttonId?: string;

  /**
   *  Name type of the button
   */ 
  @Prop() name: 'default' | 'primary' | 'positive' | 'negative' | 'link' = 'default'

  /**
   * The type of button 
   */
  @Prop({
    reflect: true,
    attribute: 'type'
  }) type: 'submit' | 'reset' | 'button' = 'button';

  render() {
    const { disabled, href, name } = this
    const tagType = href !== undefined ? 'link' as any : 'button';

    return (
      <Host
        aria-disabled={ disabled ? 'true' : 'false' }
        class={{
          [`${name}`]: true,
          ['is-disabled']: disabled
        }}
        role={tagType}
      >
        <slot></slot>
      </Host>
    )
  }
}
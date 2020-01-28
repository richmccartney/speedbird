/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SpdButton {
    /**
    * Sets the ID of the button element
    */
    'buttonId'?: string;
    /**
    * If `true`, the user cannot interact with the button.
    */
    'disabled': boolean;
    /**
    * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
    */
    'href'?: string;
    /**
    * Name type of the button
    */
    'name': 'default' | 'primary' | 'positive' | 'negative' | 'link';
    /**
    * The type of button
    */
    'type': 'submit' | 'reset' | 'button';
  }
}

declare global {


  interface HTMLSpdButtonElement extends Components.SpdButton, HTMLStencilElement {}
  var HTMLSpdButtonElement: {
    prototype: HTMLSpdButtonElement;
    new (): HTMLSpdButtonElement;
  };
  interface HTMLElementTagNameMap {
    'spd-button': HTMLSpdButtonElement;
  }
}

declare namespace LocalJSX {
  interface SpdButton {
    /**
    * Sets the ID of the button element
    */
    'buttonId'?: string;
    /**
    * If `true`, the user cannot interact with the button.
    */
    'disabled'?: boolean;
    /**
    * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.
    */
    'href'?: string;
    /**
    * Name type of the button
    */
    'name'?: 'default' | 'primary' | 'positive' | 'negative' | 'link';
    /**
    * The type of button
    */
    'type'?: 'submit' | 'reset' | 'button';
  }

  interface IntrinsicElements {
    'spd-button': SpdButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'spd-button': LocalJSX.SpdButton & JSXBase.HTMLAttributes<HTMLSpdButtonElement>;
    }
  }
}



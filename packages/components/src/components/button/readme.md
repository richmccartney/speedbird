# spd-button

Button component for the Speedbird design system

<!-- Auto Generated Below -->


## Usage

### Javascript

```html
<!-- Default -->
<spd-button>Default</spd-button>

<!-- Anchor -->
<spd-button href="#">Anchor</spd-button>

<!-- Name -->
<spd-button name="default">Default</spd-button>
<spd-button name="primary">Primary</spd-button>
<spd-button name="secondary">Secondary</spd-button>
<spd-button name="link">Link</spd-button>

<!-- Disabled -->
<spd-button disabled>Disabled</spd-button>



## Properties

| Property   | Attribute  | Description                                                                                                             | Type                                                           | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the button.                                                                    | `boolean`                                                      | `false`     |
| `href`     | `href`     | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. | `string \| undefined`                                          | `undefined` |
| `name`     | `name`     | Name type of the button                                                                                                 | `"default" \| "link" \| "negative" \| "positive" \| "primary"` | `'default'` |
| `type`     | `type`     | The type of button                                                                                                      | `"button" \| "reset" \| "submit"`                              | `'button'`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

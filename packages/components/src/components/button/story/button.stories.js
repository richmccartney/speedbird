import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// Button
storiesOf('Components/Button', module).addDecorator(withKnobs)
    .add('Default', () => {
        return `<spd-button 
                    type="submit" 
                    disabled="${boolean('Disabled', false)}"
                >
                    ${text('Button Text', 'Call to action')}
                </spd-button>`
    })
    .add('Anchor', () => {
        return `<spd-button 
                    href="#" 
                    disabled="${boolean('Disabled', false)}"
                >
                    ${text('Button Text', 'Call to action')}
                </spd-button>`
    })
    .add('Primary', () => {
        return `<spd-button
                    name="primary"
                    disabled="${boolean('Disabled', false)}"
                >
                    ${text('Button Text', 'Call to action')}
                </spd-button>`
    })
    .add('Positive', () => {
        return `<spd-button
                    name="positive"
                    disabled="${boolean('Disabled', false)}"
                >
                    ${text('Button Text', 'Call to action')}
                </spd-button>`
    })
    .add('Destructive', () => {
        return `<spd-button
                    name="destructive"
                    disabled="${boolean('Disabled', false)}"
                >
                    ${text('Button Text', 'Call to action')}
                </spd-button>`
    })
    .add('Link', () => {
        return `<spd-button
                    name="link"
                    disabled="${boolean('Disabled', false)}"
                >
                    ${text('Button Text', 'Call to action')}
                </spd-button>`
    })

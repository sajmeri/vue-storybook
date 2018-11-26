/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, number, boolean, array, select, color, date, button  } from '@storybook/addon-knobs';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';


//Decorator functions used with addDecorator
function Green() {
  return {
    template: '<div style="color: green;"><story/></div>',
  }
}
function ButtonsFormatted() {
  return {
    template: '<div style="margin:auto;padding:auto;width:50%"><story/></div>',
  }
}

storiesOf('Welcome', module)
  .addDecorator(Green)
  .add('to Storybook',() => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') }
  }))
  .add('to Storybook with notes',
      withNotes('A very simple component')
      (() => ({
      components: { Welcome },
      template: '<welcome />',
    }))
  );

//Organize stories in a nesting structures using ”/” as a separator:
storiesOf('Button/simple', module)
  .addDecorator(ButtonsFormatted)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }));

  storiesOf('Button/Emojis', module)
  .addDecorator(ButtonsFormatted)
  .add('with some emoji', () => ({
    components: { MyButton },
    template:
      '<my-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></my-button>',
    methods: { action: action('clicked') },
  }));
  const name = text('Name', 'John Doe');
  const age = number('Age', 44);
  const content = `I am ${name} and I'm ${age} years old.`;

  storiesOf('knobs', module)
  .addDecorator(withKnobs)
  .add('knobs sample', () => {
    let name = text('Name', 'Shahnaz Ajmeri');
    let years = number('Years at Pelmorex', 14);
    let content = `My name is ${name} and I've worked at Pelmorex for the last ${years} years.`;

    return {
      template: `<div>${content}</div>`,
    }

  })
  .add('All knobs', () => {
    const name = text('Name', 'Shahnaz');
    const stock = number('Stock', 20, {
      range: true,
      min: 0,
      max: 30,
      step: 5,
    });
    const fruits = {
      apples: 'Apple',
      bananas: 'Banana',
      cherries: 'Cherry',
    };
    const fruit = select('Fruit', fruits, 'apple');
    const price = number('Price', 2.25);

    const colour = color('Border', 'deeppink');
    const today = date('Today', new Date('Sep 4 2018 GMT+0'));
    const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
    const nice = boolean('Nice', true);

    const stockMessage = stock
      ? `I have a stock of ${stock} ${fruit}, costing &dollar;${price} each.`
      : `I'm out of ${fruit}${nice ? ', Sorry!' : '.'}`;
    const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };

    button('Arbitrary action', action('You clicked it!'));

    return {
      template: `
          <div style="border:2px dotted ${colour}; padding: 8px 22px; border-radius: 8px">
            <h1>My name is ${name},</h1>
            <h3>today is ${new Date(today).toLocaleDateString('en-US', dateOptions)}</h3>
            <p>${stockMessage}</p>
            <p>Also, I have:</p>
            <ul>
              ${items.map(item => `<li key=${item}>${item}</li>`).join('')}
            </ul>
            <p>${salutation}</p>
          </div>
        `,
    };
  });




/* eslint-enable react/react-in-jsx-scope */

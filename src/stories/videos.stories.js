/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';

import Videos from './Videos.vue';
import Videoslider from './VideosSlider.vue';

  storiesOf('Videos', module)
  .add('videos as list', () => ({
     components: { Videos },
     template: `<videos></videos>`
   }))
  .add('videoslider', () => ({
      components: { Videoslider },
      template: `<videoslider></videoslider>`
    }));





/* eslint-enable react/react-in-jsx-scope */

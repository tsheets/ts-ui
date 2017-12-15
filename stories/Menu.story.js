import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MenuItem } from '../src/Menu';

storiesOf('MenuItem', module).add('Basic example', () => {
  return <MenuItem onClick={()=> console.log('You clicked the menu item') }>Profile</MenuItem>;
});

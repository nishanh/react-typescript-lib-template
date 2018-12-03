import React from 'react';
import { storiesOf } from '@storybook/react';
// import '@blueprintjs/core/lib/css/blueprint.css';

import { TestComponent, ButtonComponent } from '../src/components';

storiesOf('TestComponent', module)
  .add('with text', () => <TestComponent message="Testing"/>);

storiesOf('ButtonComponent', module)
  .add('basic test', () => <ButtonComponent title="Test Text" text="Testing"/>);
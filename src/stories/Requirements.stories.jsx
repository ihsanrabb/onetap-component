import React from 'react';
import { storiesOf } from '@storybook/react'

import { Requirements } from '../components/Requirements'

const stories = storiesOf('App Test', module);

stories.add('Requirements', () => {
  return (<Requirements />)
})
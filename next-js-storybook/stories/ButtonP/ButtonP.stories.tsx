import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './ButtonP';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonP/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


export const TemplateP: ComponentStory<typeof Button> = (args) => {
  return (
    <div>
      <Button {...args}>
        ぼたんですよ
      </Button>
    </div>
  )
}

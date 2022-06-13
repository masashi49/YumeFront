import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonP } from './ButtonP';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonP,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonP>;


export const TemplateP: ComponentStory<typeof ButtonP> = (args) => {
  return (
    <div>
      <ButtonP {...args}>
        ぼたんですよaaaaaaa
      </ButtonP>
    </div>
  )
}

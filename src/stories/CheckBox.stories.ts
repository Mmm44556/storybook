import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { CheckBox } from './CheckBox';


const meta = {
  title: 'Example/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: { onHandle: fn() },
  argTypes: {
    testProps: {
      name: '自訂屬性',
      description: '測試描述',
      type: { name: 'boolean', required: true },
    }
  }
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    id: 1,
    title: 'CheckBox_1',
    isDone: false,

  },
};



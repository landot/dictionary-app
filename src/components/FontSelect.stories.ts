import type { Meta, StoryObj } from '@storybook/react';

import { FontSelect } from './FontSelect';

const meta = {
  title: 'FontSelect',
  component: FontSelect,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof FontSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

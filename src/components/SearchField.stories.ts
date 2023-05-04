import type { Meta, StoryObj } from '@storybook/react';

import { SearchField } from './SearchField';

const meta = {
  title: 'SearchField',
  component: SearchField,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

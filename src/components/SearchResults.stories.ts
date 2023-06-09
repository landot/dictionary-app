import type { Meta, StoryObj } from '@storybook/react';

import { SearchResults } from './SearchResults';

const meta = {
  title: 'SearchResults',
  component: SearchResults,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof SearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

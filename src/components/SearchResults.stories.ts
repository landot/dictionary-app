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

export const LightTheme: Story = {
  args: {},
};

LightTheme.loaders = [
  () => {
    window.localStorage.setItem("theme", "light");
  },
];


export const DarkTheme: Story = {
  args: {},
};

DarkTheme.loaders = [
  () => {
    window.localStorage.setItem("theme", "dark");
  },
];
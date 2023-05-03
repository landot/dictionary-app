import type { Meta, StoryObj } from '@storybook/react';

import { DarkModeToggle } from './DarkModeToggle';

const meta = {
  title: 'DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof DarkModeToggle>;

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
import type { Meta, StoryObj } from '@storybook/react';

import { PlayButton } from './PlayButton';

const meta = {
  title: 'PlayButton',
  component: PlayButton,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: { default: 'dark' },
  },
} satisfies Meta<typeof PlayButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

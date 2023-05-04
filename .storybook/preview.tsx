import type { Preview } from "@storybook/react";
import React from "react";
import {ThemeContext} from '../src/context/ThemeContext';
import { MemoryRouter } from "react-router";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
        icon: 'lightning',
        items: ['dark', 'light'],
        showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === 'light' ? 'light' : 'dark';
    return (
      <MemoryRouter>
        <ThemeContext.Provider value={theme}>
            <Story />
        </ThemeContext.Provider>
      </MemoryRouter>
    )
  }
];

export default preview;

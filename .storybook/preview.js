import Reset from '../containers/storyReset'
import { withThemeFromJSXProvider } from '@storybook/addon-styling'

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: Reset,
  }),
];

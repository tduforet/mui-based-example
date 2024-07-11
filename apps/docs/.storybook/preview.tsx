import {ThemeProvider} from "@mui/material";
import theme from "@athom/ui/theme";
import {Preview} from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      return (
        <ThemeProvider theme={theme}>
          <Story/>
        </ThemeProvider>
      )
    },
  ],
};

export default preview;

export const decorators = []
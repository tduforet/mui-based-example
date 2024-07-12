import {ThemeProvider} from "@mui/material";
import {Preview} from "@storybook/react";
import theme from "@athom/ui/theme";

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

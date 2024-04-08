import type { Preview } from '@storybook/react'
import * as React from 'react'

import '../src/app/globals.css'
import { Providers } from '../src/app/providers'

const preview: Preview = {
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

import { ColorModeScript, theme } from '@chakra-ui/react'

import { generateMetadata } from './(marketing)/metadata'
import { Provider } from './provider'

export { generateMetadata }

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link rel="logo" sizes="76x76" href="/static/favicons/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/logo.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}

import Document, {
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const SHEET = new ServerStyleSheet()
    const ORIGINAL_RENDER_PAGE = ctx.renderPage

    try {
      ctx.renderPage = () => ORIGINAL_RENDER_PAGE({
        enhanceApp: (App) => (props) => SHEET.collectStyles(<App { ...props } />)
      })

      const INITIAL_PROPS = await Document.getInitialProps(ctx)

      return {
        ...INITIAL_PROPS,
        styles: (
          <>
            { INITIAL_PROPS.styles }
            { SHEET.getStyleElement() }
          </>
        )
      }
    } finally {
      SHEET.seal()
    }
  }
}

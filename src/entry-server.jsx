import React from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import App from './App'
import { StaticRouter } from "react-router-dom/server";
import { store } from "./redux/store";
import { Provider } from "react-redux";

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, ssrManifest, options) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  )
}

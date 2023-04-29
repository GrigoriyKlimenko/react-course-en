import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { cardsAPI } from './services/cardsService';

const store = setupStore();

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  await store.dispatch(cardsAPI.endpoints.fetchAllCards.initiate(''));
  await Promise.all(store.dispatch(cardsAPI.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();
  const injectPreload = () => {
    return `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c'
    )}
  </script>
    `;
  };

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );

  return { stream, injectPreload };
}

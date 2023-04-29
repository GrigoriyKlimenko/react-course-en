import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { RootState, setupStore } from './store/store';

type ExtendedWindowType = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: RootState;
  };

const store = setupStore((window as ExtendedWindowType).__PRELOADED_STATE__);

delete (window as ExtendedWindowType).__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root')!,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

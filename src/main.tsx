import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import BaseLayout from './layouts/base';
import HomePage from './pages/Home';
import GlobalStyles from './styles/gloabal';
import CircleCursor from './components/CircleCursor';

import store from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Provider store={store}>
            <BaseLayout>
                <HomePage />
            </BaseLayout>
            <CircleCursor />
            <GlobalStyles />
        </Provider>
    </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import BaseLayout from './layouts/base';
import HomePage from './pages/Home';
import GlobalStyles from './styles/gloabal';
import CircleCursor from './components/CircleCursor';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <BaseLayout>
            <HomePage />
        </BaseLayout>
        <CircleCursor />
        <GlobalStyles />
    </StrictMode>
);

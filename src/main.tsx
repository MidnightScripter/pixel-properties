import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router';
import './index.css';
import routes from './routes.ts';
import PageLayout from './pages/PageLayout/PageLayout.tsx';
import { FavoritesProvider } from './context/FavoritesContext.tsx';

async function deferRender() {
  const { worker } = await import('./mocks/browser.ts');
  return worker.start();
}

const root = document.getElementById('root')!;

deferRender().then(() => {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <FavoritesProvider>
        <PageLayout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </PageLayout>
      </FavoritesProvider>
    </BrowserRouter>
  );
});

import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router';
import './index.css';
import routes from './routes.ts';

async function deferRender() {
  const { worker } = await import('./mocks/browser.ts');
  return worker.start();
}

const root = document.getElementById('root')!;

deferRender().then(() => {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
});

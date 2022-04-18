import { createRoot } from 'react-dom/client';
import Router from './Router';
import './styles/init.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<Router />);
}

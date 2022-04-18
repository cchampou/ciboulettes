import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Les Ciboulettes</h1>;
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}

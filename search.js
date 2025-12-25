import { loadFromStorage } from './storage.js';

const input = document.getElementById('searchInput');

input?.addEventListener('input', () => {
  const q = input.value.toLowerCase();
  const results = loadFromStorage().filter(e =>
    e.title.toLowerCase().includes(q)
  );
  console.log(results);
});

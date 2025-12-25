const STORAGE_KEY = 'thewatchlist-data';

export function loadFromStorage() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveToStorage(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function generateId(category) {
  const prefix = {
    kdrama: 'kd', kmovie: 'km',
    hdrama: 'hd', hmovie: 'hm',
    bdrama: 'bd', bmovie: 'bm',
    cdrama: 'cd', anime: 'ani'
  }[category];

  const count = loadFromStorage().filter(e => e.category === category).length + 1;
  return `${prefix}${String(count).padStart(3,'0')}`;
}

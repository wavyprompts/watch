export function createCard(entry) {
  return `
  <div class="content-card glass">
    <img src="${entry.poster}">
    <span class="status ${entry.status}">${entry.status}</span>
    <h3>${entry.title}</h3>
    <p>${entry.year} ⭐ ${entry.myRating}/10</p>
    <button onclick="window.open('${entry.watchLink}','_blank')">▶ Watch</button>
  </div>`;
}

export function renderCards(entries, container) {
  container.innerHTML = entries.map(createCard).join('');
}

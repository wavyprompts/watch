document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('recentGrid');
    const modal = document.getElementById('detailModal');
    const data = JSON.parse(localStorage.getItem('watchlist')) || [];

    if (data.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align:center; opacity:0.5;'>List is empty. Go to Admin to add movies!</p>";
    }

    data.reverse().forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.poster}">
            <div style="padding:10px;">
                <h4 style="margin:0; font-size:14px;">${item.title}</h4>
                <small style="opacity:0.7;">${item.year} • ${item.category}</small>
            </div>
        `;
        card.onclick = () => openDetails(item);
        grid.appendChild(card);
    });

    function openDetails(item) {
        document.getElementById('modalTitle').innerText = item.title;
        document.getElementById('modalImg').src = item.poster;
        document.getElementById('modalDetails').innerText = `Rating: ⭐ ${item.rating}/10 | Year: ${item.year}`;
        
        const vidBox = document.getElementById('videoContainer');
        if (item.trailerId) {
            vidBox.innerHTML = `<iframe src="https://www.youtube.com/embed/${item.trailerId}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            vidBox.innerHTML = "<p>No trailer available</p>";
        }
        
        modal.style.display = "flex";
    }

    document.querySelector('.close-btn').onclick = () => {
        modal.style.display = "none";
        document.getElementById('videoContainer').innerHTML = ""; // Stop video on close
    };
});

fetch("data/rentals.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("rental-options");
    let html = `<table><thead><tr><th>Type</th><th>Max</th><th>Half Day (Res)</th><th>Full Day (Res)</th></tr></thead><tbody>`;
    data.forEach(item => {
      html += `<tr><td>${item.name}</td><td>${item.max}</td><td>$${item.res_half}</td><td>$${item.res_full}</td></tr>`;
    });
    html += `</tbody></table>`;
    container.innerHTML = html;
  });
  fetch('data/rentals.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('rentalSummary');
    data.forEach(rental => {
      container.innerHTML += `
        <div class="rental-card">
          <h3>${rental.name}</h3>
          <p>${rental.description}</p>
          <p><strong>Max Persons:</strong> ${rental.max_persons}</p>
        </div>
      `;
    });
  });

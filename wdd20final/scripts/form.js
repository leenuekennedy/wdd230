document.getElementById("rentalForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Reservation submitted successfully!");
    this.reset();
  });
  
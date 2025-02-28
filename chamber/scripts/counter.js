document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount");

    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    localStorage.setItem("visitCount", visitCount);

    document.getElementById("visitCounter").textContent = `Visits: ${visitCount}`;
});

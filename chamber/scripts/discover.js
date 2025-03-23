// Visit Tracker using localStorage
window.onload = () => {
    const visitMessage = document.getElementById("visit-message");

    // Check if it's the user's first visit or they have visited before
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = new Date().getTime();

    if (lastVisit) {
        const timeDifference = currentTime - lastVisit;
        const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 3600 * 24));
        if (daysSinceLastVisit > 30) {
            visitMessage.textContent = `It's been over ${daysSinceLastVisit} days since your last visit. Welcome back!`;
        } else {
            visitMessage.textContent = `Welcome back! You last visited ${daysSinceLastVisit} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome to the Chamber of Commerce! It's your first visit!";
    }

    // Update the last visit time in localStorage
    localStorage.setItem("lastVisit", currentTime);
};

const membersContainer = document.querySelector("#members");
const toggleButton = document.querySelector("#toggleView");

async function fetchMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members, "grid");
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displayMembers(members, view) {
    membersContainer.innerHTML = "";
    membersContainer.className = view;

    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${member.membership}</p>
            <p>${member.description}</p>
        `;

        membersContainer.appendChild(memberCard);
    });
}

// Toggle View Button
toggleButton.addEventListener("click", () => {
    const currentView = membersContainer.classList.contains("grid") ? "list" : "grid";
    displayMembers(JSON.parse(localStorage.getItem("members")), currentView);
});

// Store members locally for faster switching
fetchMembers().then(members => localStorage.setItem("members", JSON.stringify(members)));

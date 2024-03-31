function lockedProfile() {
  const allProfiles = Array.from(document.querySelectorAll(".profile"));

  for (const profile of allProfiles) {
    let unlockInput = profile.querySelector('input[value="unlock"]');
    const button = profile.getElementsByTagName("button")[0];
    const userName = profile.querySelector('[id*="user"]').id;

    button.addEventListener("click", (event) => {
      if (button.textContent === "Hide it" && unlockInput.checked) {
        document.getElementById(userName).style.display = "none";
        button.textContent = "Show more";
      } else {
        if (unlockInput.checked) {
          document.getElementById(userName).style.display = "block";
          button.textContent = "Hide it";
        }
      }
    });
  }
}

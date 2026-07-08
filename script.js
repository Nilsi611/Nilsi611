const lockScreen = document.getElementById("lockScreen");
const loginScreen = document.getElementById("loginScreen");
const desktop = document.getElementById("desktop");
const loginForm = document.getElementById("loginForm");
const welcomeStage = document.getElementById("welcomeStage");
const errorMessage = document.getElementById("errorMessage");
const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");
const taskbar = document.getElementById("taskbar");
const clockTaskbar = document.getElementById("clockTaskbar");
const lockTime = document.getElementById("lockTime");
const lockDate = document.getElementById("lockDate");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const avatar = document.getElementById("avatar");
const userNameDisplay = document.getElementById("userNameDisplay");
let configuredUsers = [];

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateText = now.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  lockTime.textContent = time;
  lockDate.textContent = dateText;
  clockTaskbar.textContent = time;
}

function applyUserProfile(username) {
  const value = username.trim();

  if (!value) {
    avatar.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80";
    userNameDisplay.textContent = "Benutzer";
    return;
  }

  avatar.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80";
  userNameDisplay.textContent = value;
}

function loadConfiguredUsers() {
  configuredUsers = [
    {
      username: "admin",
      password: "1234",
      displayName: "Admin",
    },
    {
      username: "Muth",
      password: "demo",
      displayName: "Herr Muth",
    },
  ];
}

function findUser(username) {
  return configuredUsers.find((user) => user.username.toLowerCase() === username.trim().toLowerCase());
}

lockScreen.addEventListener("click", () => {
  lockScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  usernameInput.focus();
});

usernameInput.addEventListener("input", (event) => {
  applyUserProfile(event.target.value);
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  loadConfiguredUsers();

  const enteredUser = usernameInput.value.trim();
  const enteredPassword = passwordInput.value;
  const matchedUser = findUser(enteredUser);

  if (matchedUser && enteredPassword === matchedUser.password) {
    errorMessage.textContent = "";
    loginForm.classList.add("hidden");
    welcomeStage.classList.add("visible");
    loginScreen.classList.add("logging-in");

    window.setTimeout(() => {
      loginScreen.classList.add("fade-out");
      desktop.classList.remove("hidden");
    }, 1400);

    window.setTimeout(() => {
      taskbar.classList.add("visible");
      document.querySelectorAll(".desktop-icon").forEach((icon, index) => {
        window.setTimeout(() => icon.classList.add("visible"), 90 * index);
      });
    }, 2000);
  } else {
    errorMessage.textContent = "Bitte zuerst Anmeldedaten festlegen oder prüfen Sie Benutzername und Passwort.";
  }
});

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.setAttribute("aria-label", isHidden ? "Passwort ausblenden" : "Passwort einblenden");
});

startButton.addEventListener("click", () => {
  startMenu.classList.toggle("hidden");
});

updateClock();
setInterval(updateClock, 1000);
loadConfiguredUsers();

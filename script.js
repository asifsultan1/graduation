/******************************************************
 * Basic Global State / Config
 ******************************************************/
// You can change these passcodes as desired:
const PASSCODE_1 = "knockknock";
const PASSCODE_2 = "codenext";
const PASSCODE_3 = "opensesame";
const FRIENDS_PASS = "rose"; // e.g., referencing 'The Little Prince'

// Example array of 25+ random messages
const CONGRAT_MESSAGES = [
  "Heartfelt Congratulations! Your spirit has illuminated these hallowed halls.",
  "Your journey has been long, but the reward is sweet. Well done!",
  "By the authority of the High Council, you stand among the chosen!",
  "Wit, perseverance, and a dash of madness—clearly, you have it all!",
  "Your success is a beacon of hope for all who follow. Shine on!",
  "Huzzah! You’ve conquered the labyrinth and claimed your rightful place.",
  "A code cracked, a quest complete, a future bright—congratulations!",
  "Let the record show: You outsmarted every barrier on your path!",
  "Raise your banner high! Today, you are a legend in the making.",
  "From humble student to honored graduate. Bravo on this milestone!",
  "Your mind is as sharp as Excalibur! Wear your achievements proudly.",
  "Another lock undone. Another mystery solved. Congrats, detective!",
  "They said it couldn’t be done—yet here you stand, triumphant!",
  "Cheers to you, wise traveler, for unearthing the final passcode!",
  "Your determination would make even the bravest knight bow in respect!",
  "The Matrix might be infinite, but your tenacity is boundless. Bravo!",
  "Consider this your heist of honor—Ocean’s Eleven has nothing on you!",
  "A righteous victory for our new code-slayer. Enjoy the glory!",
  "Your name shall be whispered in the corridors of this digital realm!",
  "The path was steep, but your ambition soared higher. Well earned!",
  "With great power comes great responsibility—celebrate wisely!",
  "Your brilliance radiates like neon in the darkest code. Congratulations!",
  "A grand applause for a puzzle well-solved—your day of honor is here!",
  "The final door is open, and you stand victorious in the hall of legends!",
  "Nothing can stop a resolute mind. Bask in your accomplishment today!"
];

/******************************************************
 * DOM Elements
 ******************************************************/
const homePage = document.getElementById("home-page");
const challengeSection = document.getElementById("challenge-section");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");

const beginTestBtn = document.getElementById("beginTestBtn");
const submitNameBtn = document.getElementById("submitNameBtn");
const verifyPasscode1Btn = document.getElementById("verifyPasscode1Btn");
const verifyPasscode2Btn = document.getElementById("verifyPasscode2Btn");
const verifyPasscode3Btn = document.getElementById("verifyPasscode3Btn");
const hintBtn = document.getElementById("hintBtn");

const passcode1Feedback = document.getElementById("passcode1Feedback");
const passcode2Feedback = document.getElementById("passcode2Feedback");
const passcode3Feedback = document.getElementById("passcode3Feedback");

const usernameInput = document.getElementById("usernameInput");
const passcode1Input = document.getElementById("passcode1Input");
const passcode2Input = document.getElementById("passcode2Input");
const passcode3Input = document.getElementById("passcode3Input");

const congratsSection = document.getElementById("congrats-section");
const congratsTitle = document.getElementById("congratsTitle");
const dynamicMessage = document.getElementById("dynamicMessage");

const memeUpload = document.getElementById("memeUpload");
const memePreview = document.getElementById("memePreview");

const certificateBtn = document.getElementById("certificateBtn");
const certificatePreview = document.getElementById("certificatePreview");
const certificateContent = document.getElementById("certificateContent");
const certTitle = document.getElementById("certTitle");
const certName = document.getElementById("certName");
const certClassName = document.getElementById("certClassName");

const friendsSectionLink = document.getElementById("friendsSectionLink");
const friendsPassSection = document.getElementById("friends-pass-section");
const friendsSection = document.getElementById("friends-section");
const friendsPassInput = document.getElementById("friendsPassInput");
const friendsVerifyBtn = document.getElementById("friendsVerifyBtn");
const friendsPassFeedback = document.getElementById("friendsPassFeedback");

/******************************************************
 * Sound Effects (Optional)
 ******************************************************/
// Example using HTML5 Audio. Make sure you have these in your assets folder.
let beepSound = new Audio("assets/beep-sound.mp3");
let thudSound = new Audio("assets/thud-sound.mp3");
let successSound = new Audio("assets/success-sound.mp3");

/******************************************************
 * Utility Functions
 ******************************************************/
// Show/Hide Steps
function showStep(stepElement) {
  stepElement.classList.remove("hidden-step");
  stepElement.classList.add("active-step");
}
function hideStep(stepElement) {
  stepElement.classList.remove("active-step");
  stepElement.classList.add("hidden-step");
}

// Show a section / Hide another
function showSection(sectionToShow) {
  sectionToShow.classList.remove("hidden-section");
  sectionToShow.classList.add("active-section");
}
function hideSection(sectionToHide) {
  sectionToHide.classList.remove("active-section");
  sectionToHide.classList.add("hidden-section");
}

// Random congratulatory message
function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * CONGRAT_MESSAGES.length);
  return CONGRAT_MESSAGES[randomIndex];
}

/******************************************************
 * Main Logic
 ******************************************************/

// 1. Home Page "Begin Test"
beginTestBtn.addEventListener("click", () => {
  // Move from home page to challenge steps
  hideSection(homePage);
  showSection(challengeSection);
  showStep(step1);
});

// 2. Step 1: Enter Name
submitNameBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    // Proceed to next step
    hideStep(step1);
    showStep(step2);
    // Optional beep sound
    beepSound.play().catch(() => {/* handle if user blocks autoplay */});
  } else {
    alert("Please enter your name!");
  }
});

// 3. Step 2: Passcode 1
verifyPasscode1Btn.addEventListener("click", () => {
  if (passcode1Input.value.trim().toLowerCase() === PASSCODE_1) {
    hideStep(step2);
    showStep(step3);
    beepSound.play().catch(() => {});
  } else {
    thudSound.play().catch(() => {});
    passcode1Feedback.textContent = "Access Denied. Was that even close? Try again.";
  }
});

// 4. Step 3: Passcode 2
verifyPasscode2Btn.addEventListener("click", () => {
  if (passcode2Input.value.trim().toLowerCase() === PASSCODE_2) {
    hideStep(step3);
    showStep(step4);
    beepSound.play().catch(() => {});
  } else {
    thudSound.play().catch(() => {});
    passcode2Feedback.textContent = "Not all are worthy, but persistence is valued.";
  }
});

// 5. Step 4: Final Passcode
verifyPasscode3Btn.addEventListener("click", () => {
  if (passcode3Input.value.trim().toLowerCase() === PASSCODE_3) {
    // Success! Move to congrats
    hideSection(challengeSection);
    showSection(congratsSection);
    successSound.play().catch(() => {});
    // Display personalized greeting
    const userName = usernameInput.value.trim();
    congratsTitle.textContent = `Congratulations, ${userName}! You have proven yourself worthy.`;
    dynamicMessage.textContent = getRandomMessage();
  } else {
    thudSound.play().catch(() => {});
    passcode3Feedback.textContent = "Incorrect final passcode. Perhaps you need a hint?";
    hintBtn.classList.remove("hidden-step");
  }
});

// Optional: "Request a Clue" button
hintBtn.addEventListener("click", () => {
  alert("Hint: It's something about 'open' and 'sesame'...");
});

// 6. Meme Upload Preview
memeUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      memePreview.innerHTML = `<img src="${event.target.result}" alt="Meme Preview" />`;
    };
    reader.readAsDataURL(file);
  }
});

// 7. Certificate Generation
certificateBtn.addEventListener("click", async () => {
  // Personalize content
  const userName = usernameInput.value.trim();
  certName.textContent = userName ? userName : "[Unnamed Graduate]";

  // Show preview
  certificatePreview.classList.remove("hidden-section");

  // Optional: Different themes based on user selection
  // For now, we’re just defaulting to one style

  // Generate PDF
  const { jsPDF } = window.jspdf; // from UMD
  const doc = new jsPDF({ unit: "px", format: "a4" });

  // Convert certificateContent to canvas
  await html2canvas(certificateContent).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    // Add image to PDF
    doc.addImage(imgData, "PNG", 20, 20, 400, 260); 
  });

  // Prompt download
  doc.save("certificate.pdf");
});

// 8. Friends-Only Section
friendsSectionLink.addEventListener("click", () => {
  // Show pass prompt
  hideSection(congratsSection);
  showSection(friendsPassSection);
});

// 9. Verify Friends Pass
friendsVerifyBtn.addEventListener("click", () => {
  const entered = friendsPassInput.value.trim().toLowerCase();
  if (entered === FRIENDS_PASS) {
    hideSection(friendsPassSection);
    showSection(friendsSection);
  } else {
    friendsPassFeedback.textContent = "Incorrect passphrase. Try again or consult the starry skies.";
  }
});

/******************************************************
 * OPTIONAL ENHANCEMENTS
 * - Leaderboards, Additional Challenges, Easter Eggs
 ******************************************************/

// Example: Fake lockout if too many attempts
// Track attempt counts, and if > 5, show a "You’ve triggered the firewall!" message, then reset.


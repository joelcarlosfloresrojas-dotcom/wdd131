const counterDisplay = document.getElementById("review-counter");
const previousSubmission = localStorage.getItem("lastSubmission");

const now = new Date();
const formattedDate = now.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

if (previousSubmission) {
  counterDisplay.textContent = `Your previous submission was on ${previousSubmission}`;
} else {
  counterDisplay.textContent = "This is your first form submission. Thanks for reaching out!";
}

localStorage.setItem("lastSubmission", formattedDate);

document.getElementById("currentyear").textContent = now.getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
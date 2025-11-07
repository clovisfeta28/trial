document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const course = document.getElementById("course").value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value;
  const comments = document.getElementById("comments").value;

  if (!course || !rating) {
    document.getElementById("status").textContent = "Please fill all required fields.";
    return;
  }

  const feedback = {
    course,
    rating,
    comments,
    timestamp: new Date().toISOString()
  };

  // For now, just log it. Replace with Firebase or backend call.
  console.log("Feedback submitted:", feedback);
  document.getElementById("status").textContent = "Thank you for your feedback!";
  document.getElementById("feedbackForm").reset();
});
const firebaseConfig = {
  apiKey: "AIzaSyBfMrnIq1BE9R-OPD4AB1YfPcmz7wULtN0",
  authDomain: "class-feedback-system-5efd7.firebaseapp.com",
  projectId: "class-feedback-system-5efd7",
  storageBucket: "class-feedback-system-5efd7.firebasestorage.app",
  messagingSenderId: "833177466733",
  appId: "1:833177466733:web:8b8818d5c516f0e2a24c64",
  measurementId: "G-3Z77Z1MCXR"
};
// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Fetch feedback from Firestore
db.collection("feedback").orderBy("timestamp", "desc").get().then((querySnapshot) => {
  const feedbackList = document.getElementById("feedbackList");
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");
    feedbackItem.innerHTML = `
      <h3>Course: ${data.course}</h3>
      <p>Rating: ${data.rating} ⭐</p>
      <p>Comments: ${data.comments || "No comments"}</p>
      <small>Submitted: ${new Date(data.timestamp).toLocaleString()}</small>
      <hr/>
    `;
    feedbackList.appendChild(feedbackItem);
  });
}).catch((error) => {
  console.error("Error fetching feedback:", error);
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

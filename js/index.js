var text = "Hello World! Welcome to our journey history!";
    
// Get the element where the text will be displayed
var autoCompleteText = document.getElementById("autoCompleteText");

// Initialize the index to 0
var currentIndex = 0;

// Function to update the text with typing effect
function typeText() {
    // Get the current substring from the text
    var currentText = text.substring(0, currentIndex + 1);

    // Set the current text
    autoCompleteText.textContent = currentText;

    // Increment the index or reset it to 0 if the typing is complete
    if (currentIndex === text.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
}

// Call the typeText function every 100 milliseconds for the typing effect
var typingInterval = setInterval(typeText, 150);

const readMoreBtn = document.querySelector(".read-more-btn");
const text2 = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text2.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});
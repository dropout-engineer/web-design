document.body.classList.toggle("dark");

let topics = [
  "Intro to DOM",
  "Getting Elements",
  "Querying the DOM",
  "Creating Elements",
  "Removing Elements",
  "Modifying Element Classes",
  "Working with Attribute",
  "DOM Event Basics",
  "Common DOM Events",
];

let currentTopicIndex = 5;

let h1Element = document.getElementById("intro-text");
let scriptElement = document.querySelector("script");
let ulElement = document.querySelector("ul");

let olElement = document.createElement("ol");

topics.forEach((text, index) => {
  let li = document.createElement("li");
  li.innerHTML = text;
  li.style.fontSize = "22px";

  if (index < currentTopicIndex) {
    li.classList.add("text-info");
  } else if (index > currentTopicIndex) {
    li.classList.add("text-danger");
  } else {
    li.classList.add("text-warning", "current-topic");
  }

  olElement.appendChild(li);
});

h1Element.insertAdjacentElement("beforeend", olElement);

document
  .querySelector(".text-warning")
  .classList.replace("text-warning", "text-success");

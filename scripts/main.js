const firstName = "Himawari";
const lastName = "Yanagisawa";
const fullName = firstName + " " + lastName;

let myAge = 13;

// select elements
const section = document.querySelector("section");
const heading = document.querySelector("h1");
const paraAge = document.getElementById("age");
const paraNextAge = document.createElement("p");
section.appendChild(paraNextAge);

// update content
heading.textContent = fullName;
const nextMsg = `In 20 years, I will be ${myAge + 20}`;
paraAge.textContent = "age: " + myAge;
console.log(nextMsg);
paraNextAge.textContent = nextMsg;

//heading.appendChild(paraAge);
//heading.appendChild(paraNextAge);
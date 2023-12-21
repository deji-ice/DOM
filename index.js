const form = document.getElementById("form");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const country = document.getElementById("country");
  const week = document.getElementById("week");
  const pullRequest = document.getElementById("pullRequest");
  const deployment = document.getElementById("deployment");
  const secure = document.getElementById("secure");
  const range = document.getElementById("range");
  if (firstName.value !== "" && lastName.value !== "" && country.value !== "") {
    console.log("First Name:", firstName.value);
    console.log("Last Name:", lastName.value);
    console.log("Country:", country.value);
    console.log("Pull Requests:", pullRequest.checked);
    console.log("deployment:", deployment.checked);
    console.log("weekly report:", week.checked);
    console.log("Run security check upon login:", secure.checked);  
    confirm("are you sure you want to submit");
    firstName.value = "";
    lastName.value = "";
    country.value = "";
    pullRequest.checked = false;
    deployment.checked = false;
    week.checked = false;
    secure.checked = true;
  }
});



// const btn = document.getElementById("btn")
// const input =document.querySelector("input")

// function popUp (){
//   alert("the button was clicked")
// }
// function popUp2 (){
//   alert("the text was copied")
// }

// input.addEventListener("change", function(){
//   const input = document.querySelector("input")
//   console.log(input.value)
// })

// console.log(input)

// p.addEventListener("", popUp2)

// btn.addEventListener("click", popUp)

// const button = document.querySelector("button")
// const h1 = document.createElement("h1")
// const p = document.createElement("p")
// p.innerText = "heyy whats up ?"
// h1.innerText = "Hello World"

// const className = document.getElementById("hello")
// const button2 = document.getElementById("two")

// button2.innerText = "click me 5"

// button2.after(p)

// console.log(button2)

// className.after(p)

// h1.append(p)

// console.log(className)

// console.log(h1)

// console.log(button)

// const newDiv = document.createElement("div");
// const newContent = document.createTextNode("hey, what is up?");
// newDiv.appendChild(newContent);
// document.body.appendChild(newDiv);

// const button = document.createElement("button");
// button.innerText = "click me 4";
// const buttonsDiv = document.getElementById("buttons");
// buttonsDiv.append("dfgytfdfgh");
// const innerHTML_buttons = buttonsDiv.innerHTML;

// const buttons = document.querySelectorAll("button");

//remove elements
// buttonsDiv.removeChild(buttons)

// function tellJoke() {
//   const button = document.createElement("button");
//   button.innerText = "click me ";
//   const buttonsDiv = document.getElementById("buttons");
//   buttonsDiv.append(button);

// }

// const jokeInterval = setInterval(tellJoke, 5000);

// console.log(buttons);

// console.log(button)

// const first =  document.getElementById("main-paragraph")
// const second = document.getElementById("without-style")
// const className = first.getAttribute("class")
// console.log(className)
// const className2 = second.getAttribute("class")
// const removeAttribute = button.removeAttribute("disabled")
// const disableButton = button.setAttribute("disabled", "true")
// const buttonClassName = button.setAttribute("class", "btn-main")
// const ableButton = button.removeAttribute("disabled")

// const button = document.getElementsByTagName("button")[0]
// button.style.background = "skyblue"
// button.style.border = "none"
// button.style.padding= "10px"
// button.style.borderRadius = "10px"
// button.style.hover

// console.log(button)
// console.log(removeAttribute)
// console.log(disableButton)

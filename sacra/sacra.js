const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const grayColor = document.getElementsByClassName(`gray`);
const imageCard = document.querySelector("img");
const feedbackBtn = document.querySelector(".feedback");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

redColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imageCard.src ="https://images.unsplash.com/photo-1463462927315-fb10af2c68d8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D";
});
blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.src ="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D";
});

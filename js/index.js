// 1.     MouseEnter 
// 2.     MouseLeave Event   
const canalImage = document.querySelector(".img-fluid");
// console.log(canalImage);

canalImage.addEventListener("mouseenter", () => {
canalImage.style.transform = "scale(2.1)";
canalImage.style.transition = "all 0.8s";
})
canalImage.addEventListener("mouseleave", () => {
canalImage.style.transform = "scale(1.0)";
canalImage.style.transition = "all 0.8s";
})


// 3.       Click Event            
const nav = document.querySelectorAll("a");
// console.log(nav);

nav.forEach(element => {
element.addEventListener("click", () => {
element.style.color = "dodgerBlue";
    });
})


// 4.         Click Event         
const button = document.querySelector(".intro h2 ");
// console.log(button);

////changes text, changes color and enlarges////
button.addEventListener("click", (event) => {
event.target.textContent = "Enjoy your ride!";
event.target.style.color = "hotpink";
event.target.style.transform = "scale(1.5)";
    })


// 5.          Scroll Event          
window.addEventListener("scroll", () => {
////this shows the amount of pixels of scroll without actually scrolling all the way down 
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
////this shows the amount of pixels as you are scrolling down
const scrolled = window.scrollY;

if(scrolled === scrollable) {
    alert("You scrolled to the bottom!")
    }
});


// 6.            Copy Event             
const copy = document.querySelector(".destination p");
// console.log(copy);
//////when you copy text, pop up and turns orange
copy.addEventListener("copy", (e) => {
const selection = document.getSelection();
e.clipboardData.setData('text/plain', selection.toString());
event.preventDefault();
console.log("You copied me");
copy.style.color = "orange";
});

// 7.            Double Click Event
const footer = document.querySelector("footer");
// console.log(footer);
footer.addEventListener("dblclick", () => {
    footer.style.backgroundColor = "purple";
})

// 8.           Keydown Event on 1st button
const bottomButton = document.querySelector(".btn");
// console.log(bottomButton);
window.addEventListener("keydown", (e) => {
    bottomButton.textContent = e.code;
    console.log("Keydown event");
})

// 9.            Drag Event
const dragged = document.querySelector(".img-content");
console.log(dragged);
dragged.addEventListener("drag", () => {
console.log("dragging");
})

// 10.           Mouseover Event
const requestor = document.querySelector("div");
// console.log(requestor);
document.addEventListener("fullscreenerror", (e) => {
    console.error("an error occurred changing into fullscreen");
    console.log(event);
});



// preventDefault & stopPropagation
const body = document.querySelector("body");
document.querySelector("body");

body.addEventListener("click", () => {
body.style.backgroundColor="yellow";
})
const bottom = document.querySelector(".content-destination");
bottom.addEventListener("click", (e) => {
    bottom.style.backgroundColor="hotpink";
    event.stopPropagation();
    /////stopped propagation here
})

// preventDefault
const prevDefault = document.querySelector(".nav-link");

prevDefault.addEventListener("click", (e) => {
    console.log("stop links");

    event.preventDefault();
})

TweenMax.to(".intro img", 6, {
    rotation:360,
  
});










    

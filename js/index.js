/**     MouseEnter and MouseLeave Event   **/

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

/**          Click Event            **/
const nav = document.querySelectorAll("a");
// console.log(nav);

nav.forEach(element => {
    element.addEventListener("click", () => {
        element.style.color = "dodgerBlue";
    });
})

/**           Click Event           **/

const button = document.querySelector(".intro h2 ");
    // console.log(button);

    ////changes text, changes color and enlarges////
    button.addEventListener("click", (event) => {
        event.target.textContent = "Enjoy your ride!";
        event.target.style.color = "hotpink";
        event.target.style.transform = "scale(1.5)";
    })


/**           Scroll Event           **/
window.addEventListener("scroll", () => {
    ////this shows the amount of pixels of scroll without actually scrolling all the way down 
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    ////this shows the amount of pixels as you are scrolling down
    const scrolled = window.scrollY;

    if(scrolled === scrollable) {
        alert("You scrolled to the bottom!")
    }
});

/**             Copy Event               **/

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



    

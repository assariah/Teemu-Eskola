
let divs = document.querySelectorAll("div");
/**@type Element */
let div;
for (div of divs) {
    console.log(div.textContent)
}
let listItems = document.querySelectorAll("ul>li")
for(li of listItems){
li.textContent="John doe"
}
const spans = document.querySelectorAll("#play span");
console.log(spans);


for (const mySpan of spans) {
    mySpan.style.backgroundColor = "yellow";
    let actor = mySpan.dataset.actor;
    alert(actor);
}

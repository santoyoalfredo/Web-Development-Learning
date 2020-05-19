var buttons = document.querySelectorAll(".drum");
buttons.forEach( function () { addEventListener("click", handleClick)} );

function handleClick() {
    alert("Got clicked!");
}

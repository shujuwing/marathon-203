
const modal = document.getElementById("myModal");


const btn = document.getElementById("openModalBtn");


const closebtn = document.getElementsByClassName("close");


btn.onclick = function() {
    modal.style.display = "block";
}


closebtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


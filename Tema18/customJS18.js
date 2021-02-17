document.getElementById("myDropdown").onclick = showAnswer

function showAnswer(){
    var x = document.getElementById("dropdownAnswer").innerHTML;
    document.getElementById("answer").innerHTML = x;
}

function myFunction(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "grey"
}
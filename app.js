function submit() {

    let line1 = document.getElementById("line1").value;
    let line2 = document.getElementById("line2").value;
    let line3 = document.getElementById("line3").value;
    let line4 = document.getElementById("line4").value;
    let line5 = document.getElementById("line5").value;
    let line6 = document.getElementById("line6").value;
    let line7 = document.getElementById("line7").value;
    let line8 = document.getElementById("line8").value;


    if (line1 === "a") {

        let span1 = document.getElementById("1").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("1").innerHTML += "(Wrong✗)"
    }
    if (line2 === "the") {

        let span1 = document.getElementById("2").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("2").innerHTML += "(Wrong✗)"
    }
    if (line3 === "the") {

        let span1 = document.getElementById("3").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("3").innerHTML += "(Wrong✗)"
    }
    if (line4 === "an") {

        let span1 = document.getElementById("4").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("4").innerHTML += "(Wrong✗)"
    }
    if (line5 === "an") {

        let span1 = document.getElementById("5").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("5").innerHTML += "(Wrong✗)"
    }
    if (line6 === "a") {

        let span1 = document.getElementById("6").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("6").innerHTML += "(Wrong✗)"
    }
    if (line7 === "the") {

        let span1 = document.getElementById("7").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("7").innerHTML += "(Wrong✗)"
    }

    if (line8 === "a") {

        let span1 = document.getElementById("8").innerHTML += "(Correct✔)"
    } else {
        let span1 = document.getElementById("8").innerHTML += "(Wrong✗)"
    }



}
function Refresh() {
    location.reload();
}
function checkVote() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let country = document.getElementById("country").value;

    if (country.toLowerCase() === "india" && age >= 18) {
        document.getElementById("result").innerHTML =
            name + " is eligible to vote";
    }
    else {
        document.getElementById("result").innerHTML =
            name + " is not eligible to vote";
    }
}
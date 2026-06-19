function fillform() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    alert("Thank you, " + name + "!.");
}

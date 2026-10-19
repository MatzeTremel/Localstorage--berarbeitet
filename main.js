const firstnames = ["Hans", "Mathias", "Tim", "Elias", "Emilia"];
const lastnames = ["Müller", "Leis", "Mayer", "Stahl", "Koch"];
const ages = [19, 25, 22, 16, 50];

document.addEventListener("DOMContentLoaded", initladen);

function initladen() {
  laden();

  document.getElementById("add-btn").addEventListener("click", add);
}

function laden() {
  const studenten = JSON.parse(localStorage.getItem("student")) || [];

  const liste = document.getElementById("main-div");

  liste.innerHTML = "";

  for (let i = 0; i < studenten.length; i++) {
    //div
    const div = document.createElement("div");
    div.classList.add("main-div");

    //Firstname
    const pFirstName = document.createElement("p");
    pFirstName.textContent = `Vorname: ${studenten[i].firstname}`;
    div.appendChild(pFirstName);

    //lastname
    const pLastName = document.createElement("p");
    pLastName.textContent = `Nachname: ${studenten[i].lastname}`;
    div.appendChild(pLastName);

    //age
    const pAge = document.createElement("p");
    pAge.textContent = `Alter: ${studenten[i].age}`;
    div.appendChild(pAge);

    //löschen btn
    const deleteButton = document.createElement("button");
    deleteButton.textContent = " Löschen";
    deleteButton.onclick = function () {
      btnDelete(i);
    };
    div.appendChild(deleteButton);

    liste.appendChild(div);
  }
}

function add() {
  const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
  const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
  const age = ages[Math.floor(Math.random() * ages.length)];

  const student = {
    firstname: firstname,
    lastname: lastname,
    age: age,
  };

  const studenten = JSON.parse(localStorage.getItem("student")) || [];

  studenten.push(student);

  localStorage.setItem("student", JSON.stringify(studenten));

  laden();
}

function btnDelete(index) {
  const studenten = JSON.parse(localStorage.getItem("student")) || [];

  studenten.splice(index, 1);

  localStorage.setItem("student", JSON.stringify(studenten));

  laden();
}

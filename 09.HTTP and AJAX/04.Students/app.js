async function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";

  const studentsTbodyElement = document.querySelector("#results tbody");
  const submitElement = document.getElementById("submit");

  submitElement.addEventListener("click", async () => {
    const firstNameElement = document.querySelector("input[name=firstName]");
    const lastNameElement = document.querySelector("input[name=lastName]");
    const facultyNumberElement = document.querySelector(
      "input[name=facultyNumber]"
    );
    const gradeElement = document.querySelector("input[name=grade]");

    const newStudent = {
      firstName: firstNameElement.value,
      lastName: lastNameElement.value,
      facultyNumber: facultyNumberElement.value,
      grade: gradeElement.value,
    };

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      const data = await response.json();
      studentsTbodyElement.appendChild(createStudentElement(data));

      firstNameElement.value = "";
      lastNameElement.value = "";
      facultyNumberElement.value = "";
      gradeElement.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  });

  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((student) =>
      studentsTbodyElement.appendChild(createStudentElement(student))
    );
  } catch (error) {
    console.error("Error:", error);
  }

  function createStudentElement(student) {
    const trElement = document.createElement("tr");

    const createRd = (value) => {
      const tdElement = document.createElement("td");
      tdElement.textContent = value;

      return tdElement;
    };

    trElement.appendChild(createRd(student.firstName));
    trElement.appendChild(createRd(student.lastName));
    trElement.appendChild(createRd(student.facultyNumber));
    trElement.appendChild(createRd(student.grade));

    return trElement;
  }
}

attachEvents();

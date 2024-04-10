window.addEventListener("load", solve);

// function solve() {
//     const addButton = document.getElementById("add-btn");
//     const taskUlList = document.getElementById("task-list");
//
//     addButton.addEventListener("click", getInformationFromTheForm)
//
//     function getInformationFromTheForm() {
//         const { place, action, person } = getValues();
//
//         if (place && action && person)  {
//             const liElement = document.createElement("li");
//
//             const articleElement = document.createElement("article");
//             const placeParagraph = document.createElement("p");
//             placeParagraph.textContent = `Place:${place}`;
//
//             const actionParagraph = document.createElement("p");
//             actionParagraph.textContent = `Action:${action}`;
//
//             const personParagraph = document.createElement("p");
//             personParagraph.textContent = `Person:${person}`;
//
//             articleElement.appendChild(placeParagraph);
//             articleElement.appendChild(actionParagraph);
//             articleElement.appendChild(personParagraph);
//
//             liElement.appendChild(articleElement);
//             taskUlList.appendChild(liElement);
//
//             const divElement = document.createElement("div");
//             divElement.classList.add("buttons");
//
//             const editButton = document.createElement("button");
//             editButton.classList.add("edit");
//             editButton.textContent = "Edit";
//             editButton.addEventListener("click", function() {
//                 editInformation(place, action, person, liElement);
//             });
//
//             const doneButton = document.createElement("button");
//             doneButton.classList.add("done");
//             doneButton.textContent = "Done";
//             doneButton.addEventListener("click", function() {
//                 theJobIsDone(liElement);
//             })
//
//             liElement.appendChild(divElement);
//
//             divElement.appendChild(editButton);
//             divElement.appendChild(doneButton);
//
//             cleanValues()
//         }
//     }
//
//     function editInformation(par, act, per , liEl) {
//         document.getElementById('place').value = par;
//         document.getElementById('action').value = act;
//         document.getElementById('person').value = per;
//
//         taskUlList.removeChild(liEl);
//
//     }
//
//     function theJobIsDone(liEl) {
//         const ulDoneList = document.getElementById("done-list");
//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete");
//         deleteButton.textContent = "Delete";
//
//
//         const buttonsDiv = liEl.querySelector('.buttons');
//         liEl.removeChild(buttonsDiv)
//         ulDoneList.appendChild(liEl);
//         ulDoneList.appendChild(deleteButton);
//
//         deleteButton.addEventListener("click", function() {
//             deleteDoneTask();
//         })
//     }
//
//     function deleteDoneTask() {
//         const ulDoneList = document.getElementById("done-list");
//         const liToDelete =  ulDoneList.querySelector('li');
//         const buttonToDelete = ulDoneList.querySelector('button')
//         ulDoneList.removeChild(liToDelete);
//         ulDoneList.removeChild(buttonToDelete);
//
//     }
//
//     function getValues() {
//         const place = document.getElementById("place").value;
//         const action = document.getElementById("action").value;
//         const person = document.getElementById("person").value;
//
//         return { place, action, person };
//     }
//
//     function cleanValues () {
//         document.getElementById('place').value = '';
//         document.getElementById('action').value = '';
//         document.getElementById('person').value = '';
//     }
// }

function solve() {
    const addButton = document.getElementById("add-btn");
    const taskUlList = document.getElementById("task-list");

    addButton.addEventListener("click", getInformationFromTheForm);

    function getInformationFromTheForm() {
        const { place, action, person } = getValues();

        if (place && action && person)  {
            const liElement = document.createElement("li");
            liElement.classList.add("clean-task");

            const articleElement = document.createElement("article");

            const placeParagraph = document.createElement("p");
            placeParagraph.textContent = `Place:${place}`;

            const actionParagraph = document.createElement("p");
            actionParagraph.textContent = `Action:${action}`;

            const personParagraph = document.createElement("p");
            personParagraph.textContent = `Person:${person}`;

            articleElement.appendChild(placeParagraph);
            articleElement.appendChild(actionParagraph);
            articleElement.appendChild(personParagraph);

            liElement.appendChild(articleElement);
            taskUlList.appendChild(liElement);

            const divElement = document.createElement("div");
            divElement.classList.add("buttons");

            const editButton = document.createElement("button");
            editButton.classList.add("edit");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", function() {
                editInformation(place, action, person, liElement);
            });

            const doneButton = document.createElement("button");
            doneButton.classList.add("done");
            doneButton.textContent = "Done";
            doneButton.addEventListener("click", function() {
                theJobIsDone(liElement);
            });

            divElement.appendChild(editButton);
            divElement.appendChild(doneButton);

            liElement.appendChild(divElement);

            cleanValues();
        }
    }

    function editInformation(par, act, per , liEl) {
        document.getElementById('place').value = par;
        document.getElementById('action').value = act;
        document.getElementById('person').value = per;

        taskUlList.removeChild(liEl);
    }

    function theJobIsDone(liEl) {
        const ulDoneList = document.getElementById("done-list");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            deleteDoneTask(liEl, deleteButton);
        });

        const buttonsDiv = liEl.querySelector('.buttons');
        buttonsDiv.remove();

        ulDoneList.appendChild(liEl);
        liEl.appendChild(deleteButton);
    }

    function deleteDoneTask(liEl, deleteButton) {
        const ulDoneList = document.getElementById("done-list");
        ulDoneList.removeChild(liEl);
        liEl.removeChild(deleteButton);
    }

    function getValues() {
        const place = document.getElementById("place").value;
        const action = document.getElementById("action").value;
        const person = document.getElementById("person").value;

        return { place, action, person };
    }

    function cleanValues () {
        document.getElementById('place').value = '';
        document.getElementById('action').value = '';
        document.getElementById('person').value = '';
    }
}

solve();
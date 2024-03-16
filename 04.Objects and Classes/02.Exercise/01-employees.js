function createListOfEmployees(input) {
    const employeesInfo = {}

    for (let employee of input) {
        const personalNumber = employee.length
        employeesInfo[employee] = personalNumber
    }

    for (const name in employeesInfo) {
        console.log(`Name: ${name} -- Personal Number: ${employeesInfo[name]}`);
    }
}

// function createListOfEmployees(input) {
//     const employeesInfo = input.reduce((acc, name) => {
//         acc[name] = name.length;
//         return acc;
//     }, {});

//     for (const name in employeesInfo) {
//         console.log(`Name: ${name} -- Personal Number: ${employeesInfo[name]}`);
//     }
// }

createListOfEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
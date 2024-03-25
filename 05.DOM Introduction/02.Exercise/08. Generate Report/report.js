function generateReport() {
    let personObject = {};
    let allObjects = [];
    let columnsCount = [];

    let allColumns = document.querySelectorAll('thead tr th input')

    for (let i = 0; i < allColumns.length; i++) {
        let checkBox = allColumns[i].checked;

        if(checkBox) {
            columnsCount.push(i);
        }
    }

    let titles = document.querySelectorAll('thead, tr')[0].getElementsByTagName('th');
    let rowsCount = document.querySelectorAll('tbody tr').length;

    for (let row = 0; row < rowsCount; row++) {
        columnsCount.forEach((element)=>{
            let key = titles[element].textContent.trim().toLowerCase();
            let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[element].textContent;
            personObject[key] = value;
        });

        allObjects.push(Object.assign(personObject));
        personObject = {};
    }

    document.getElementById('output').innerHTML = JSON.stringify(allObjects);
}
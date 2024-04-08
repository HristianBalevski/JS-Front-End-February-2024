function getInfo() {

const stopId =document.getElementById('stopId').value;
const stopName = document.getElementById('stopName').value;
    const submit = document.getElementById('submit');

    submit.addEventListener('click', busStation)

    function busStation() {
        fetch('http://localhost:3030/jsonstore/bus/businfo/:busId')
            .then(res => res.json())
            .then(data => {
                stopName.textContent = data;
            })
    }
}
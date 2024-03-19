function sumTable() {
    const tdElements = document.querySelectorAll('tr td:last-of-type:not(#sum)')
    const tdSumElement = document.getElementById('sum')
    tdSumElement.textContent = Array.from(tdElements).reduce((sum, price) => sum + Number(price.textContent), 0)
}
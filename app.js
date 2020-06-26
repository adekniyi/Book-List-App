var title = document.querySelector('#title')
var author = document.querySelector('#author')
var isbn = document.querySelector('#isbn')
var form = document.querySelector('form')
var tbody = document.querySelector('tbody')


form.addEventListener('submit', displayValue)

function displayValue(e) {
    e.preventDefault()
    getValue()
    createAndDeleteRow()

}

function getValue() {
    titleValue = title.value;
    authorValue = author.value;
    isbnValue = isbn.value;
    console.log(titleValue)
    console.log(authorValue)
    console.log(isbnValue)
}

function createAndDeleteRow() {
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${titleValue}</td>
    <td>${authorValue}</td>
    <td>${isbnValue}</td>
    <td><a href="#" class="danger">X</td>`;
    tbody.appendChild(row)
    row.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.classList.contains('danger')) {
            e.target.parentElement.parentElement.remove();
        }
    })
}
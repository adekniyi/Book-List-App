var title = document.querySelector('#title')
var author = document.querySelector('#author')
var isbn = document.querySelector('#isbn')
var form = document.querySelector('form')


form.addEventListener('submit', getValue)

function getValue(e) {
    e.preventDefault()
    titleValue = title.value;
    authorValue = author.value;
    isbnValue = isbn.value;
    console.log(titleValue)
    console.log(authorValue)
    console.log(isbnValue)

}
const btn = document.querySelector('.btn')
const formulario = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-input');
const pagesInput = document.querySelector('.form__pages-input');
const authorInput = document.querySelector('.form__author-input');
const formBtn = document.querySelector('.form__btn');
const bookCard = document.querySelector('.book__card');

const myLibrary = [];

function Book(name, pages, author) {
  return {
    name: name,
    pages: pages,
    author: author
  };
};

function addBookToLibrary(name, pages, author) {
   myLibrary.push(Book(name, pages, author));
}

function removeBook(book) {
  console.log(book);
}

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  Book(nameInput.value, pagesInput.value, authorInput.value);
  
  addBookToLibrary(nameInput.value, pagesInput.value, authorInput.value);
  nameInput.value = '';
  pagesInput.value = '';
  authorInput.value = '';

  const lastBook = myLibrary[myLibrary.length - 1];

  const div = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('h5');
  const pages = document.createElement('h5');
  const removeBtn = document.createElement('button');

  div.classList.add('card');
  removeBtn.classList.add('btn');

  title.textContent = `Title: ${lastBook.name}`;
  author.textContent = `Author: ${lastBook.author}`;
  pages.textContent = `Pages: ${lastBook.pages}`;
  removeBtn.textContent = 'Remove';


  div.append(title, author, pages, removeBtn);
  bookCard.append(div);
  
  removeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const parent = event.target.parentNode;
    parent.remove();
   });
  });



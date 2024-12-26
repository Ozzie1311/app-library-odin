//Apuntando a todos los elementos que voy a necesitar
const btn = document.querySelector('.btn')
const formulario = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-input');
const pagesInput = document.querySelector('.form__pages-input');
const authorInput = document.querySelector('.form__author-input');
const formBtn = document.querySelector('.form__btn');
const bookCard = document.querySelector('.book__card');
const checkbox = document.getElementById('checkbox');

// const myLibrary = [];

// function Book(name, pages, author) {
//   return {
//     name: name,
//     pages: pages,
//     author: author
//   };
// };

class Book {
  constructor(name, pages, author) {
    this.name = name;
    this.pages = pages;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBookToLibrary(book) {
    this.books.push(book)
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  getLastBook() {
    return this.books[this.books.length - 1];
  }
};

const myLibrary = new Library();


// function addBookToLibrary(name, pages, author) {
//    myLibrary.push(Book(name, pages, author));
// }

// function removeBook(book) {
//   console.log(book);
// }

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  // Book(nameInput.value, pagesInput.value, authorInput.value);
  // addBookToLibrary(nameInput.value, pagesInput.value, authorInput.value);
  const libro = new Book(nameInput.value, pagesInput.value, authorInput.value);
  myLibrary.addBookToLibrary(libro);
  nameInput.value = '';
  pagesInput.value = '';
  authorInput.value = '';

  const lastBook = myLibrary.getLastBook();

  //Creando todos los elementos necesarios para mostrar la informacion de los libros.
  const div = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const isRead = document.createElement('p');
  const removeBtn = document.createElement('button');

  div.classList.add('card');
  removeBtn.classList.add('btn');

  title.innerHTML = `Title:<br> <strong>${lastBook.name}</strong>`;
  author.innerHTML = `Author:<br> <strong>${lastBook.author}</strong>`;
  pages.innerHTML = `Pages:<br> <strong>${lastBook.pages}</strong>`;
  isRead.innerHTML = `Is read:<br> <strong>${ checkbox.checked? 'Yes' : 'Not yet'}<strong>`
  removeBtn.textContent = 'Remove';
  console.log(checkbox.value)


  div.append(title, author, pages, isRead, removeBtn);
  bookCard.append(div);
  
  removeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const parentIndex = Array.from(bookCard.children).indexOf(div);
    myLibrary.removeBook(parentIndex);
    div.remove();
   });
  });



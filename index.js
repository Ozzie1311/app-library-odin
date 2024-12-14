//Apuntando a todos los elementos que voy a necesitar
const btn = document.querySelector('.btn')
const formulario = document.querySelector('.form');
const nameInput = document.querySelector('.form__name-input');
const pagesInput = document.querySelector('.form__pages-input');
const authorInput = document.querySelector('.form__author-input');
const formBtn = document.querySelector('.form__btn');
const bookCard = document.querySelector('.book__card');
const checkbox = document.getElementById('checkbox');

//Creando el arreglo de libros vacios
const myLibrary = [];

//Funcion creadora de Libros
function Book(name, pages, author) {
  return {
    name: name,
    pages: pages,
    author: author
  };
};

//Funcion que añade los Libros creados al array de Libros.
function addBookToLibrary(name, pages, author) {
   myLibrary.push(Book(name, pages, author));
}

//Funcion que elimina el libro seleccionado del array.
function removeBook(book) {
  console.log(book);
}

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  //LLamado a la funcion creadora de libros.
  Book(nameInput.value, pagesInput.value, authorInput.value);
  
  //Llamado a la funcion que almacena los libros en el array
  addBookToLibrary(nameInput.value, pagesInput.value, authorInput.value);
  nameInput.value = '';
  pagesInput.value = '';
  authorInput.value = '';

  //Obteniendo siempre el ultimo valor del array, para siempre mostrar el ultimo.
  const lastBook = myLibrary[myLibrary.length - 1];

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
    const parent = event.target.parentNode;
    parent.remove();
   });
  });



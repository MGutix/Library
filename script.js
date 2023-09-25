let bookArea = document.getElementById('bookArea')
let addBookBtn = document.getElementById('addBook')
let modal = document.querySelector('[data-modal]')
let submit = document.getElementById('submit')

let bookName;
let bookAuthor;
let bookPages;
let isRead;

const myLibrary = [];

function Book (name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.toggleIsRead = () => {
    console.log('hola')
    if(this.isRead === 'Read'){
      this.isRead = 'Not Read'
      //cardIsRead.setAttribute("class", "notRead");
    } else{
      this.isRead = 'Read'
      //cardIsRead.setAttribute("class", "read");
    }
    
  }
}

function addBookToLibrary() {

  modal.showModal();

  let inputs = document.querySelectorAll('input') 
  inputs.forEach(input => {
    input.value = '';
  });
  
  console.log(myLibrary)

  submit.addEventListener('click', displayBooks)

}

function displayBooks() {


  bookName = document.getElementById('bookTitle').value;
  bookAuthor = document.getElementById('bookAuthor').value;
  bookPages = document.getElementById('bookPages').value;
  isRead = document.getElementById('bookIsRead');

  if (isRead.checked){
    isRead = 'Read'
  } else {
    isRead = 'Not Read'
  }
  
  let newBook = new Book(bookName, bookAuthor, bookPages, isRead);
  myLibrary.push(newBook)

  bookArea.innerHTML = '';

  for (let i = 0; i<myLibrary.length; i++) {
    let newCard = document.createElement('div');
    newCard.setAttribute("class", "bookCard");

    let cardBookName = document.createElement('h3');
    cardBookName.setAttribute("class", "cardBookName");
    newCard.appendChild(cardBookName);
    let contentBookName = document.createTextNode(`"${myLibrary[i].name}"`);
    cardBookName.appendChild(contentBookName);

    let cardBookAuthor = document.createElement('h3');
    cardBookAuthor.setAttribute("class", "cardBookAuthor");
    newCard.appendChild(cardBookAuthor);
    let contentBookAuthor = document.createTextNode(myLibrary[i].author);
    cardBookAuthor.appendChild(contentBookAuthor);

    let cardBookPages = document.createElement('h3');
    cardBookPages.setAttribute("class", "cardBookPages");
    newCard.appendChild(cardBookPages);
    let contentBookPage = document.createTextNode(`${myLibrary[i].pages} pages`);
    cardBookPages.appendChild(contentBookPage);

    let cardIsRead = document.createElement('button');
    cardIsRead.setAttribute('data-index', `${i}`);
    if(myLibrary[i].isRead === 'Read'){
      cardIsRead.setAttribute('class', 'read');
    } else{
      cardIsRead.setAttribute('class', 'notRead');
    }
    cardIsRead.classList.add('cardIsRead')
    newCard.appendChild(cardIsRead);
    let contentIsRead = document.createTextNode(`${myLibrary[i].isRead}`);
    cardIsRead.appendChild(contentIsRead);

    let cardRemove = document.createElement('button');
    cardRemove.setAttribute('class', 'cardRemove');
    newCard.appendChild(cardRemove);
    let contentCardRemove = document.createTextNode(`Remove`);
    cardRemove.appendChild(contentCardRemove);

    bookArea.appendChild(newCard);
  }
}

addBookBtn.addEventListener('click', addBookToLibrary)


cardIsRead = document.getElementsByClassName('cardIsRead');
for (let i = 0; i < cardIsRead.length; i++) {
  cardIsRead[i].addEventListener('click', toggleIsRead);
}



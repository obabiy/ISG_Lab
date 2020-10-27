let createBookButton = document.getElementById("createBookButton");
let createListButton = document.getElementById("createListButton");

let inputBookTitle = document.getElementById("bookTitle");
let inputBookGenre = document.getElementById("bookGenre");
let inputBookAuthor = document.getElementById("bookAuthor");
let inputBookIsRead = document.getElementById("bookIsRead");
let inputBookDate = document.getElementById("bookDate");
let createBookInputs = document.getElementsByClassName("createBookInputs"); // not working...

let inputListTitle = document.getElementById("listTitle");

let card = document.getElementById("cardContainer");
let closeListButton = document.getElementById("closeButton");
closeListButton.addEventListener("click", handleOpenList);


let bookLists = [];
let booksGlobal = [];

function handleOpenList(listTitle) {
  card.style.display = card.style.display === "flex" ? "none" : "flex";

  if (listTitle) {
    
    let currentList = bookLists.filter(list => list.title === listTitle).shift()
    console.log(currentList)

    document.getElementById('listTitle').innerHTML = `${currentList.title}`
    
    booksGlobal.forEach(book => {
      let globalBookInListHTML = document.createElement('li')
      globalBookInListHTML.id = book.title
      globalBookInListHTML.innerHTML = `<b>${book.title}</b>`
      document.getElementById('cardAddBooks').append(globalBookInListHTML)
      document.getElementById(book.id).addEventListener('click', () => {
        currentList.add(book)
      })
    })
    
    currentList.books.forEach(book =>{ 
        let bookInListHtml = document.createElement('li')
        bookInListHtml.id = `${book.title}`
        bookInListHtml.innerHTML = `<b>${book.title}</b>`
        document.getElementById('cardExistBooks').append(bookInListHtml)
    })
    
    let htmlBook = document.createElement("div");
  htmlBook.id = `${title}`;
  htmlBook.innerHTML = `<li><b>${element.title}</b></li>`;
  document.getElementById("booksGlobal").append(htmlBook);
  }
}

createBookButton.addEventListener("click", () =>
  createBookGlobal(
    inputBookTitle.value,
    inputBookGenre.value,
    inputBookAuthor.value,
    inputBookIsRead.checked,
    inputBookDate.value
  )
);
createListButton.addEventListener("click", () =>
  createBookList(inputListTitle.value)
);

function createBookList(title) {
  // создание глобальных книг
  if (title) {
    bookLists.push(new BookList(title));
    inputListTitle.value = "";
    generateListsHtml(title);
  } else alert("Wrong book list title, try again..");
}

function createBookGlobal(title, genre, author, isRead, date) {
  // создание списков книг
  if (title && genre && author) {
    booksGlobal.push(new Book(title, genre, author, isRead, date));
    inputBookTitle.value = "";
    inputBookDate.value = "";
    inputBookGenre.value = "";
    inputBookAuthor.value = "";
    inputBookIsRead.value = false;
    generateBooksHTML(title);
  } else alert("Wrong book info");
}

function addBookToTheList(title, listTitle) {
  bookList
    .filter((list) => list.title === listTitle)
    .add(booksGlobal.filter((book) => book.title === title)); // Добавление книги в определенный список
}

function changeCurrentBook(bookTitle, listTitle) {
  bookLists
    .filter((list) => list.title === listTitle)
    .changeCurrentBook(bookTitle);
}

function showDate(listTitle) {
  return bookLists.filter((list) => list.title === listTitle).showReadDate();
}

function setDate(listTitle, date) {
  bookLists.filter((list) => list.title === listTitle).newReadDate(date);
}

function generateBooksHTML(title) {
  let element = booksGlobal.filter((book) => book.title === title).shift();
  let htmlBook = document.createElement("div");
  htmlBook.id = `${title}`;
  htmlBook.innerHTML = `<li><b>${element.title}</b></li>`;
  document.getElementById("booksGlobal").append(htmlBook);
}

function generateListsHtml(title) {
  let element = bookLists.filter((list) => list.title === title).shift();
  let htmlList = document.createElement("div");
  htmlList.id = `${title}`;
  htmlList.innerHTML = `<li><b>${element.title}</b></li>`;
  document.getElementById("lists").append(htmlList);
  document.getElementById(title).addEventListener("click", () => {
    handleOpenList(element.title);
  });
}

class Book {
  constructor(title, genre, author, isRead, date) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
    this.date = date !== null ? new Date(date) : null;
  }
}

class BookList {
  constructor(title) {
    this.title = title;
  }

  books = [];
  currentBoot = null;
  lastBook = null;
  nextBook = null;

  numDoneBooks = null;
  numBooksToRead = null;

  add(book) {
    this.books.push(book);

  }

  finishCurrentBook() {
    this.books
      .filter((book) => book === this.currentBook)
      .shift().isRead = true;

    this.lastBook = this.currentBook;
    this.currentBook = this.nextBook;
    this.nextBook = this.allBooks
      .filter((book) => book.isRead === false)
      .shift();
  }

  showReadDate() {
    return this.currentBook.date ?? null; // for current book
  }

  newReadDate(date) {
    this.currentBook.date = new Date(date);
  }
}

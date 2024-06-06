const myLibrary = [];

function Book(title, author, num_pages, read) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;

    this.info = function() {
        let output = '';
        let read_book;
        if (this.read) {
            read_book = 'read';
        } else {
            read_book = 'not read yet';
        }
        output = `${this.title} by ${this.author}, ${this.num_pages}, ${read_book}`;
        return output;
    }
}

// add event listener to buttons that changes their colour when they are hovered over
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = '#06b6d4';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = 'white';
    });
}

// const addBookToLibrary = (book) => {
//     myLibrary.push(book);
// };

// const displayAllBooks = (book) => {

//     function hasRead(has_read) {
//         let read_book;
//         if (has_read) {
//             read_book = 'yes';
//         } else {
//             read_book = 'no';
//         }
//         return read_book;
//     }

//     const page = document.querySelector('body');
//     const booksContainer = document.createElement('div');
//     booksContainer.classList.add('book-container');
//     for (const book of myLibrary) {
//         const bookCard = document.createElement('div');
//         const bookTitle = document.createElement('h3');
//         bookTitle.textContent = `Title: ${book['title']}`;
//         const bookAuthor = document.createElement('h3');
//         bookAuthor.textContent = `Author: ${book['author']}`;
//         const bookPages = document.createElement('h3');
//         bookPages.textContent = `Pages: ${book['num_pages']}`;
//         const readBook = document.createElement('h3');
//         readBook.textContent = `Read: ${hasRead(book['read'])}`;
//         bookCard.appendChild(bookTitle);
//         bookCard.appendChild(bookAuthor);
//         bookCard.appendChild(bookPages);
//         bookCard.append(readBook);
//         bookCard.style.border = '2px solid black';
//         bookCard.style.borderRadius = '16px';
//         booksContainer.appendChild(bookCard);
//     }
//     page.appendChild(booksContainer);
// };

// const diaryOfAWimpyKid = new Book('Diary of a Wimpy Kid', 'Jeff Kinney', 224, true);
// const dogDays = new Book('Dog Days', 'Jeff Kinney', 217, true);

// addBookToLibrary(diaryOfAWimpyKid);
// addBookToLibrary(dogDays);

// displayAllBooks();
const tableBody = document.querySelector('tbody');
let myLibrary = [];

function Book(title, author, num_pages, read_book) {
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read_book;

    this.info = function() {
        output = `${this.title} by ${this.author}, ${this.num_pages}, ${this.read}`;
        return output;
    }

    this.changeReadStatus = function() {
        this.read = this.read === "Not Read Yet" ? "Read" : "Not Read Yet";
        return this.read;
    }
}

const addBookToLibrary = (book) => {
    myLibrary.push(book);
};

const addBookToTable = (book, i) => {
    const title = book['title'];
    const author = book['author'];
    const pages = book['num_pages'];
    const read = book['read'];

    let checked;
    if (read === "read") {
        checked = "checked";
    }

    const template = `
        <tr>
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td><input type="checkbox" ${checked}></input></td>
        </tr>
    `;
    tableBody.innerHTML += template;

    const checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('click', () => {
        book.changeReadStatus();
    });

}

// add event listener to buttons that changes their colour when they are hovered over
// also add event listener for each button when clicked (separate functions)
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

// open modal
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelector('.add-book');
const submitForm = document.querySelector('input[type="submit"]');
openModal.addEventListener('click', () => {
    modal.showModal();
});
closeModal.addEventListener('click', () => {
    form.reset();
    modal.close();
});
submitForm.addEventListener('mouseenter', () => {
    submitForm.style.backgroundColor = '#06b6d4';
});
submitForm.addEventListener('mouseleave', () => {
    submitForm.style.backgroundColor = 'white';
});


// add book to library
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // get the values submitted by the user
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numPages = document.getElementById('num_pages').value;
    const hasRead = document.querySelector('input[type="radio"]:checked').value.toLowerCase();
    const newBook = new Book(title, author, numPages, hasRead);
    addBookToLibrary(newBook);
    const numEntries = tableBody.rows.length - 1; // subtract 1 from number of tr's to account for header row
    addBookToTable(newBook, numEntries);
    form.reset();
    modal.close(); // close the form
});

// reset to default
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    tableBody.innerHTML = ``;
    myLibrary = [];
});

const deleteForm = document.querySelector('.delete-form')
const modalDelete = document.querySelector('.modal-1');
const closeModalDelete = document.querySelector('.close-modal-1');
const openModalDelete = document.querySelector('.delete');
openModalDelete.addEventListener('click', () => {
    if (myLibrary.length > 0) {
        modalDelete.showModal();
    }
});
closeModalDelete.addEventListener('click', () => {
    deleteForm.reset();
    modalDelete.close();
}); 
deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookToDelete = Number.parseInt(document.getElementById('book_to_del').value) - 1;
    tableBody.deleteRow(bookToDelete);
    myLibrary.splice(bookToDelete,1);
    deleteForm.reset();
    modalDelete.close();
});
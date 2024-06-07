const table = document.querySelector('table');
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
    if (read === "yes") {
        checked = "checked";
    }

    const template = `
        <tr>
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td><div class="read-status-container"><input type="checkbox" ${checked}></input></div></td>
            <th><button data-index="${i}" class="delete"><img src="assets/delete-forever-outline.svg"><p>Delete</p></button></th>
        </tr>
    `;
    table.innerHTML += template;
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

// add book/open modal
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelector('.add-book');
const submitForm = document.querySelector('input[type="submit"]');
openModal.addEventListener('click', () => {
    modal.showModal();
});
closeModal.addEventListener('click', () => {
    modal.close();
});
submitForm.addEventListener('mouseenter', () => {
    submitForm.style.backgroundColor = '#06b6d4';
});
submitForm.addEventListener('mouseleave', () => {
    submitForm.style.backgroundColor = 'white';
});

// reset to default
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    const table = document.querySelector('table');
    table.innerHTML = `
            <thead>
                <tr class="headings">
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Read?</th>
                    <th>Delete?</th>
                </tr>
            </thead>
    `;
});

// delete book from library
function addDeleteBehaviour() {
    const dels = document.querySelectorAll('.delete');
    for (let j = 0; j < dels.length; j++) {
        const del = dels[j];
        del.addEventListener('click', () => {
            const index = Number.parseInt(del.dataset.index);
            // remove from array and then rebuild according to said modified array
            myLibrary.splice(index,1);
            table.innerHTML = `
            <thead>
                <tr class="headings">
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Read?</th>
                    <th>Delete?</th>
                </tr>
            </thead>
    `;
            for (let n = 0; n < myLibrary.length; n++) {
                const book = myLibrary[n];
                addBookToTable(book, n);
            }
        });
    }
}

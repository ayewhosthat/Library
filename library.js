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

const addBookToLibrary = (book, library) => {
    library.push(book);
};

const addBookToTable = (book) => {
    const table = document.querySelector('table');
    const title = book['title'];
    const author = book['author'];
    const pages = book['num_pages'];
    const read = book['read'];

    const template = `
        <tr>
            <td>${title}</td>
            <td>${author}</td>
            <td>${pages}</td>
            <td><div class="read-status-container">${read}<input type="checkbox"></input></div></td>
            <th><button class="delete"><img src="assets/delete-forever-outline.svg"><p>Delete</p></button></th>
        </tr>
    `;
    table.innerHTML += template;
}

const myLibrary = [];
const sampleLibrary = [];
let hasLoadedSample = false;
const diaryOfAWimpyKid = new Book('Diary of a Wimpy Kid', 'Jeff Kinney', 224, "yes");
const dogDays = new Book('Dog Days', 'Jeff Kinney', 217, "yes");
addBookToLibrary(diaryOfAWimpyKid, sampleLibrary);
addBookToLibrary(dogDays, sampleLibrary);

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

// load sample library
const loadSample = document.querySelector('.load');
loadSample.addEventListener('click', () => {
    if (!hasLoadedSample) {
        for (let i = 0; i < sampleLibrary.length; i++) {
        const book = sampleLibrary[i];
        addBookToTable(book);
        };
        hasLoadedSample = true;   
    }
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
    hasLoadedSample = false;
});

// // add book button
// const addBook = document.querySelector('.add-book');
// addBook.addEventListener('click', () => {
//     const modal = document.createElement('dialog');
// });

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

const myLibrary = [];
const sampleLibrary = [];
const diaryOfAWimpyKid = new Book('Diary of a Wimpy Kid', 'Jeff Kinney', 224, "yes");
const dogDays = new Book('Dog Days', 'Jeff Kinney', 217, "yes");

addBookToLibrary(diaryOfAWimpyKid);
addBookToLibrary(dogDays);

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

// add book button
const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', () => {
    const modal = document.createElement('dialog');
});

// const addBookToLibrary = (book) => {
//     myLibrary.push(book);
// };




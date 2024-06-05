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
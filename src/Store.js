class Store {
  static getBooks() {
    const books = JSON.parse(localStorage.getItem('library.books')) || [];
    return books;
  }

  static saveBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('library.books', JSON.stringify(books));
  }

  static removeBook(element) {
    let books = Store.getBooks();
    const elementIsbn = element.parentElement.parentElement.getAttribute(
      'data-isbn'
    );
    books = books.filter(book => book.isbn !== elementIsbn);
    console.log(books);
    localStorage.setItem('library.books', JSON.stringify(books));
  }
}
export default Store;

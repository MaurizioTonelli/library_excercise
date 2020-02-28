import Book from './Book';
import UI from './UI';
import Store from './Store';

// Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Create Books
const newBookForm = document.querySelector('#new-book-form');
newBookForm.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  if (title === '' || author === '' || isbn === '') {
    UI.alertMessage('Fill in all fields', 'text-danger');
    return;
  }
  const book = new Book(title, author, isbn);
  UI.addBookToList(book);
  Store.saveBook(book);
  UI.clearFields();
  UI.alertMessage('Book Added', 'text-success');
});
// Delete Books
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', e => {
  UI.removeBookFromList(e.target);
  Store.removeBook(e.target);
});

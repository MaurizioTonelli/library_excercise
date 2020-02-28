import Store from './Store';

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class = "btn btn-danger btn-sm delete">X</a></td>
        `;
    row.setAttribute('data-isbn', book.isbn);
    list.appendChild(row);
  }

  static removeBookFromList(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
      UI.alertMessage('Book Removed', 'text-success');
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  static alertMessage(text, className) {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = 'text-center mt-4';
    message.classList.add(className);
  }
}

export default UI;

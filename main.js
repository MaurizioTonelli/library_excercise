let myLibrary = [];
let submitBook = document.querySelector('#submit-book');
const form = document.querySelector('.form');
const bookContainer = document.querySelector('.card-container');
const showForm = document.querySelector('#toggle-form');
showForm.addEventListener('click', e=>{
    form.classList.remove('invisible');
});
render(myLibrary);
submitBook.addEventListener('click', e=>{
    let bookTitle = document.querySelector('#book-title').value;
    let bookAuthor = document.querySelector('#book-author').value;
    let bookPages = document.querySelector('#book-pages').value;
    let bookRead = document.querySelector('#book-read').checked;
    let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(book);
});


class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead(){
        if(this.read == true){
            this.read = false;
        }else{
            this.read = true;
        }
        while(bookContainer.hasChildNodes()){
            bookContainer.removeChild(bookContainer.firstChild);
        }
        render(myLibrary);
    }
}


function addBookToLibrary(book){
    myLibrary.push(book);
    while(bookContainer.hasChildNodes()){
        bookContainer.removeChild(bookContainer.firstChild);
    }
    render(myLibrary);
}

function render(array){
    array.forEach((element,index) => {
        let card = document.createElement('div');
        card.setAttribute('data-key', `${index}`);
        let title = document.createElement('p');
        title.textContent = element.title;
        let author = document.createElement('p');
        author.textContent = element.author;
        let pages = document.createElement('p');
        pages.textContent = element.pages;
        let read = document.createElement('button');
        if(element.read == true){
            read.textContent = "read";
        }else{
            read.textContent = "not read";
        }
        read.addEventListener('click', e=>{
            element.toggleRead();
        });
        let deleteMovie = document.createElement('button');
        deleteMovie.textContent = 'Delete';
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(deleteMovie);
        bookContainer.appendChild(card);
        deleteMovie.addEventListener('click',e=>{
            bookContainer.removeChild(card);
            myLibrary.splice(index,1);
        });
    });
}

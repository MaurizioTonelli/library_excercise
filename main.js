class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI{
    static displayBooks(){
        const array = [
            {
                title:"skldjf",
                author: "anitold",
                isbn: 12323,
            },
            {
                title:"asd",
                author: "anitdddddold",
                isbn: 1232123,
            },
        ];
        let books = array;
        books.forEach((book)=>{
            UI.addBookToList(book);
        })
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
        list.appendChild(row);
    }
}
class Store{

}
//Display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);
//Create Books

//Delete Books
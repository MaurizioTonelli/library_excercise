!(function(e) {
  const t = {};
  function o(n) {
    if (t[n]) return t[n].exports;
    const r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = e),
    (o.c = t),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      )
        for (const r in e)
          o.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ''),
    o((o.s = 0));
})([
  function(e, t, o) {
    o.r(t);
    const n = class {
      constructor(e, t, o) {
        (this.title = e), (this.author = t), (this.isbn = o);
      }
    };
    class r {
      static getBooks() {
        return JSON.parse(localStorage.getItem('library.books')) || [];
      }

      static saveBook(e) {
        const t = r.getBooks();
        t.push(e), localStorage.setItem('library.books', JSON.stringify(t));
      }

      static removeBook(e) {
        let t = r.getBooks();
        const o = e.parentElement.parentElement.getAttribute('data-isbn');
        (t = t.filter(e => e.isbn !== o)),
          console.log(t),
          localStorage.setItem('library.books', JSON.stringify(t));
      }
    }
    const s = r;
    class a {
      static displayBooks() {
        s.getBooks().forEach(e => {
          a.addBookToList(e);
        });
      }

      static addBookToList(e) {
        const t = document.querySelector('#book-list');
        const o = document.createElement('tr');
        (o.innerHTML = `\n            <td>${e.title}</td>\n            <td>${e.author}</td>\n            <td>${e.isbn}</td>\n            <td><a class = "btn btn-danger btn-sm delete">X</a></td>\n        `),
          o.setAttribute('data-isbn', e.isbn),
          t.appendChild(o);
      }

      static removeBookFromList(e) {
        e.classList.contains('delete') &&
          (e.parentElement.parentElement.remove(),
          a.alertMessage('Book Removed', 'text-success'));
      }

      static clearFields() {
        (document.getElementById('title').value = ''),
          (document.getElementById('author').value = ''),
          (document.getElementById('isbn').value = '');
      }

      static alertMessage(e, t) {
        const o = document.getElementById('message');
        (o.textContent = e),
          (o.className = 'text-center mt-4'),
          o.classList.add(t);
      }
    }
    const l = a;
    document.addEventListener('DOMContentLoaded', l.displayBooks),
      document.querySelector('#new-book-form').addEventListener('submit', e => {
        e.preventDefault();
        const t = document.getElementById('title').value;
        const o = document.getElementById('author').value;
        const r = document.getElementById('isbn').value;
        if (t === '' || o === '' || r === '')
          return void l.alertMessage('Fill in all fields', 'text-danger');
        const a = new n(t, o, r);
        l.addBookToList(a),
          s.saveBook(a),
          l.clearFields(),
          l.alertMessage('Book Added', 'text-success');
      }),
      document.querySelector('#book-list').addEventListener('click', e => {
        l.removeBookFromList(e.target), s.removeBook(e.target);
      });
  },
]);

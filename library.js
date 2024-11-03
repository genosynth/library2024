const books = [
    {
      title: 'Book',
      author: 'Name',
      pages: '200',
      read: 'Yes'
    },
    {
      title: 'Book2',
      author: 'Name2',
      pages: '120',
      read: 'No'
    }
  ]


function Book(title,author,pages,read){ // Book Constructor
  return {title,author,pages,read}

}

const listOfBooks = document.getElementById('listOfBooks')
//console.log(library)

function displayBooks(books){
  
  books.map((book)=>{

    
    const li = document.createElement('li')
    li.innerText = book.title + ` - ` + book.author + ` - `
    listOfBooks.appendChild(li)
    })   
   
  }
 
 function addBook(){

  let title = document.getElementById('book-title').value
  let author = document.getElementById('book-author').value
  let pages = document.getElementById('book-pages').value
  let read = document.getElementById('answer').value

  const book = new Book(title,author,pages,read)
  books.push(book)
  console.log(books)

  listOfBooks.innerText = ``
  displayBooks(books)

  console.log(title)
  document.getElementById('book-title').value = ``
  document.getElementById('book-author').value = ``
  document.getElementById('book-pages').value = ``
  document.getElementById('answer').value = ``

  //Table work

  document.getElementById('table')


 } 


displayBooks(books)
//addBook()

console.log(books)
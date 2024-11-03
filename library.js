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


function Book(name,author,pages,read){ // Book Constructor
  return {name,author,pages,read}

}

const listOfBooks = document.getElementById('listOfBooks')
//console.log(library)

function displayBooks(books){
  
  books.map((book)=>{
    const li = document.createElement('li')
    li.innerText = book.title
    listOfBooks.appendChild(li)
    })   
   
  }
 
 function addBook(){
 
  const book = new Book('book3','joe','22','Yes')
  books.push(book)
  console.log(books)
  displayBooks(books)
 } 


displayBooks(books)
//addBook()

console.log(books)
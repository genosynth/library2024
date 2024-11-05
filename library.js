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

  //Table work
  
  const table = document.getElementById("table")
  const tr = document.createElement("tr")
  const td = document.createElement("td")
  td.innerText = document.getElementById("book-title").value //Title
  tr.appendChild(td)
  const td2 = document.createElement("td")
  td2.innerText=document.getElementById("book-author").value  //Author
  tr.appendChild(td2)
  const td3 = document.createElement("td")
  td3.innerText=document.getElementById("book-pages").value  //Pages
  tr.appendChild(td3)
  const td4 = document.createElement("td")
  td4.innerText=document.getElementById("answer").value //Read
  tr.appendChild(td4)
  table.appendChild(tr)

  document.getElementById('book-title').value = ``
  document.getElementById('book-author').value = ``
  document.getElementById('book-pages').value = ``
  document.getElementById('answer').value = ``



 } 


displayBooks(books)
//addBook()

console.log(books)
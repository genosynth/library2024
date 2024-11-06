const books = [
    {
      title: 'Book',
      author: 'Name',
      pages: '200',
      read: 'yes'
    },
    {
      title: 'Book2',
      author: 'Name2',
      pages: '120',
      read: 'no'
    }
  ]


function Book(title,author,pages,read){ // Book Constructor
  return {title,author,pages,read}

}

const listOfBooks = document.getElementById('listOfBooks')
//console.log(library)

function displayBooks(books){
  const table = document.getElementById("table")
  table.innerHTML=`  <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read</th>
              </tr>
              <tr>
                <td>Life</td>
                <td>Tony G</td>
                <td>35</td>
                <td>Yes</td>
              </tr>`
  
  books.map((book)=>{
    
  
  const tr = document.createElement("tr")
  const td = document.createElement("td")
  td.innerText = book.title //Title
  tr.appendChild(td)
  const td2 = document.createElement("td")
  td2.innerText=book.author  //Author
  tr.appendChild(td2)
  const td3 = document.createElement("td")
  td3.innerText=book.pages  //Pages
  tr.appendChild(td3)
  const td4 = document.createElement("button")
  td4.innerText=book.read //Read
  tr.appendChild(td4)
  table.appendChild(tr)
  td4.addEventListener("click", function(){
    //console.log(td4.innerText)
    if (book.read=="yes"){       
      book.read="no"
      displayBooks(books)
      console.log(books)
    } else { 
      book.read='yes'
      displayBooks(books)
      console.log(books)
    }
  
    
    })
  //td4.innerText=document.getElementById("answer").value //Read
 
  })   
   
  }
 
 function addBook(){

  


  let title = document.getElementById('book-title').value
  let author = document.getElementById('book-author').value
  let pages = document.getElementById('book-pages').value
  let read = document.getElementById('answer').value

  if (title==`` | author==`` | pages==`` |read==`` ){return alert("Please insert all data.")}

  const book = new Book(title,author,pages,read)
  books.push(book)
  
  document.getElementById('book-title').value = ``
  document.getElementById('book-author').value = ``
  document.getElementById('book-pages').value = ``
  document.getElementById('answer').value = ``

  displayBooks(books)

 } 


displayBooks(books)
//addBook()

console.log(books)

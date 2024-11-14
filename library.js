const books = [
  {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    pages: '200',
    read: 'yes'
  }
 
]


function Book(title,author,pages,read){ // Book Constructor
return {title,author,pages,read}

}


function displayBooks(books){

  let memory = JSON.parse(localStorage.getItem("Library2024"))

  if(memory){books = memory}
  const table = document.getElementById("table")
  table.innerHTML=`  <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Read</th>
              </tr>`

  books.map((book, index)=>{
    

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
  const td4 = document.createElement("td")
  td4.classList.add("read")
  td4.innerText=book.read //Read
  tr.appendChild(td4)
  const delBtn = document.createElement("td")
  delBtn.classList.add("delete-button")
  delBtn.innerText='DEL'

  delBtn.addEventListener("click", ()=>{  
    let confirm = window.confirm("Are you sure you want to delete "+ book.title + " ?")
    if (!confirm){return}
    books.splice(index,1)
    localStorage.setItem("Library2024", JSON.stringify(books)); //saves in local storage
    console.log(books)
    displayBooks(books)
  })
  tr.appendChild(delBtn)
  table.appendChild(tr)
  td4.addEventListener("click", function(){
        
    if (book.read=="yes"){       
      book.read="no"
      localStorage.setItem("Library2024", JSON.stringify(books)) 
      displayBooks(books)
      //console.log(books)
    } else { 
      book.read='yes'
      localStorage.setItem("Library2024", JSON.stringify(books)) 
      displayBooks(books)
      //console.log(books)
    }

 
    })


  })   
 
}

function addBook(){



let title = document.getElementById('book-title').value
let author = document.getElementById('book-author').value
let pages = document.getElementById('book-pages').value
let read = document.getElementById('answer').value

if (title==`` | author==`` | pages==`` |read==`` ){return alert("Please insert all data.")}

let memory = JSON.parse(localStorage.getItem("Library2024"))
const book = new Book(title,author,pages,read)

if(memory){
  memory.push(book)
  localStorage.setItem("Library2024", JSON.stringify(memory))
  displayBooks(memory)
}
if(!memory){
  books.push(book)
  localStorage.setItem("Library2024", JSON.stringify(books)); //saves in local storage
  displayBooks(books)
}



document.getElementById('book-title').value = ``
document.getElementById('book-author').value = ``
document.getElementById('book-pages').value = ``
document.getElementById('answer').value = ``



toggleClass() //to hide  add book info and show new book button again

} 

function toggleClass() {
let bookForm = document.getElementById('book-form')
let newBookButton = document.getElementById('new-book-btn')

if (bookForm.className == "hidden"){
  bookForm.className = "visible"
} else { bookForm.className = "hidden"}

if (newBookButton.className == "hidden"){
  newBookButton.className = "visible"
} else { newBookButton.className = "hidden"}


}

document.addEventListener("keypress", function(event) { // pressing enter key when entering new book form fix
  if (event.key === "Enter" && document.getElementById('book-form').className=="visible") {
    addBook()
  }
})


displayBooks(books)

console.log(books)
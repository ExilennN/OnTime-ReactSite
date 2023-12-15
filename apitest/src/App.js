import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [books, setBooks] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newPublishedDate, setNewPublishedDate] = useState('');


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);
  
  const addBook = () =>{
    const name = newName.trim();
    const author = newAuthor.trim();
    const published_date = newPublishedDate.trim();

    if(name && author && published_date){
      fetch('http://127.0.0.1:8000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "charset": "utf-8"
        },
        body: JSON.stringify({
          name,
          author,
          published_date
        })
      })
      .then(response => response.json())
      .then(data => {
        setBooks([...books, data]);
        setNewName('');
        setNewAuthor('');
        setNewPublishedDate('');
      });
    }

  }

  const updateBook = (id) => {
    const book = books.find(book=> book.id === id);

    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "charset": "utf-8"
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        published_date: book.published_date
      })
    })
    .then(response => response.json())
    .then(()=>{
      document.location.reload();
    });
  }
 
  const onChangeHandler = (id, key, value) =>{
    setBooks(values =>{
      return values.map(book => {
        if(book.id === id){
          book[key] = value;
        }
        return book;
      })
    })
  }

  const deleteBook = (id) =>{
    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: 'DELETE',
    }).then(response => response.json())
    .then(()=>{
      document.location.reload();
    });

  }

  return (
    <div className="App">
      {books.map(book => (
        <div style={{border: "1px solid black"}} key={book.id}>
          <input type='text' value={book.name} onChange={(e) => onChangeHandler(book.id, 'name', e.target.value)}></input>
          <p>{book.author}</p>
          <p>{book.published_date}</p>
          <button onClick={() => updateBook(book.id)}>Update</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}

      <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)}></input>
      <input type='text' value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)}></input>
      <input type='text' value={newPublishedDate} onChange={(e) => setNewPublishedDate(e.target.value)}></input>

      <button onClick={addBook}>Add Book</button>
      
    </div>
  );
}

export default App;

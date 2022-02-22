import './App.css';
import contactsArr from './contacts.json';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsArr);

  return (
    <div className="App">
      <h1>IronContacts</h1>
       <table className="Table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td> <img className='Img' src={ contact.pictureUrl }/> </td>
                <td>{ contact.name }</td>
                <td>{ Math.round(contact.popularity * 100) / 100 }</td>
              </tr>
            )
          })}
        </tbody>
       </table>
    </div>
  );
}

export default App;

import './App.css';
import contactsArr from './contacts.json';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsArr);

  return (
    <div className="App">
       <table>
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
                <td> <img src={contact.pictureUrl}/> </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            )
          })}
        </tbody>
       </table>
    </div>
  );
}

export default App;

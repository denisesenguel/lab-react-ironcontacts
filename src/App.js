import './App.css';
import contactsArr from './contacts.json';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsArr.slice(0,5));

  function addContact() {

    const remaining = contactsArr.filter(contact => !contacts.includes(contact));
    
    if (remaining.length > 0) {
      
      const newContacts = [...contacts];
      const randomIndex = Math.floor(Math.random() * remaining.length);
      newContacts.push(remaining[randomIndex]);

      setContacts(newContacts);
    }
  }

  function sortContactsByName() {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }

  function sortContactsByPop() {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={ addContact }>Add Random Contact</button>
      <button onClick={ sortContactsByName } >Sort by Name</button>
      <button onClick={ sortContactsByPop }>Sort by Popularity</button>
       <table className="Table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={ contact.id }>
                <td> <img className='Img' src={ contact.pictureUrl } alt={ contact.name }/> </td>
                <td> { contact.name }</td>
                <td> { Math.round(contact.popularity * 100) / 100 }</td>
                <td> { (contact.wonOscar) && <span role="img" aria-label="trophy">🏆</span> } </td>
                <td> { (contact.wonEmmy) && <span role="img" aria-label="trophy">🏆</span> } </td>
              </tr>
            )
          })}
        </tbody>
       </table>
    </div>
  );
}

export default App;

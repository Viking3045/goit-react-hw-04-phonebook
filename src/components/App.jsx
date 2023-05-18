import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

export const App =()=> {
  const [contacts, setContacts] = useState( ()=> JSON.parse(window.localStorage.getItem('contacts')) ?? '');
  const [filter, setFilter] = useState('');


  useEffect(() => {
      // console.log(contacts)
      window.localStorage.setItem('contacts', JSON.stringify(contacts))
  });

    
  // },[])

  //   componentDidUpdate(prevProps, prevState) {
  //   // console.log('AppComponentDidUpdate')
  //   if (this.state.contacts !== prevState.contacts) {
  //     // console.log('refresh pages')
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }
  // componentDidMount() {
  //   const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'))
  //   if (contactsLocalStorage) {
  //         this.setState({contacts: contactsLocalStorage})
  //   }

  // }

  const formSubmitHandler = (data) => {
 repeatControl(data)
    
  }
   const repeatControl = data => {
    let nameArray = [];
    nameArray = contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...contacts,
        { id: uuidv4(), name: data.name, number: data.number },
      ];
      return setContacts( arrayCont );
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };

 const  elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

 const deleteContactFromContactList = idContact => {
    let newArrAfterDel = elementDelete(contacts, idContact);
    setContacts(
       newArrAfterDel
    );
  };

 const setFilterToState = filterData => {
    setFilter(filterData );
  };

 const filterArr = fArr => {
    let newArr = fArr.filter(cur =>
      cur.name.toUpperCase().includes(filter),
    );
    return newArr;
  };

    return (
          <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmitData={formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={setFilterToState} />
        <ContactList
          contacts={filterArr(contacts)}
          del={deleteContactFromContactList}
        />
      </div>

    );
}

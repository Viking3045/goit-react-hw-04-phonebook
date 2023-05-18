import React from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };



    componentDidUpdate(prevProps, prevState) {
    // console.log('AppComponentDidUpdate')
    if (this.state.contacts !== prevState.contacts) {
      // console.log('refresh pages')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  componentDidMount() {
    const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'))
    if (contactsLocalStorage) {
          this.setState({contacts: contactsLocalStorage})
    }

  }

  formSubmitHandler = (data) => {
 this.repeatControl(data)
    
  }
   repeatControl = data => {
    let nameArray = [];
    nameArray = this.state.contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: uuidv4(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };

  elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromContactList = idContact => {
    let newArrAfterDel = this.elementDelete(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  setFilterToState = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  filterArr = fArr => {
    let newArr = fArr.filter(cur =>
      cur.name.toUpperCase().includes(this.state.filter),
    );
    return newArr;
  };
  //  changeFilter = (event) => {
  //   event.preventDefault();
  //   this.setState({filter:event.currentTarget.value})
  // }




 
  render() {
    // const data = this.formSubmitHandler(data)
    // const VisibleContacts = this.state.contacts
    //  console.log(this.state.contacts)
    return (
          <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmitData={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Filter setFilterToState={this.setFilterToState} />
        <ContactList
          contacts={this.filterArr(this.state.contacts)}
          del={this.deleteContactFromContactList}
        />
      </div>
      // <div>
      //   <Form contacts={this.state.contacts} onSubmit={this.formSubmitHandler} />
      //       <h2>Contacts</h2>
      //   <Filter filter={this.state.filter} onChange={this.changeFilter} contacts={this.state.contacts} />
      //   {/* <ContactList visibleContacts={this.state.contacts} /> */}
      // </div>
    );
  }
}

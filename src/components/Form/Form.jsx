import React from 'react';
import css from './Form.module.css'
// import { nanoid } from 'nanoid';
// import Filter from 'components/Filter/Filter';
class Form extends React.Component {
  state = {
    name: '',
    number: '',
    // contacts:[],
  };

  handelInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    };

  handelSubmit = (event) => {
    event.preventDefault();

    let contact = { name: this.state.name, number: this.state.number };
    this.props.onSubmitData(contact);

      // this.state.contacts.push({
      // number: this.state.number,
      // name: this.state.name,
      // id: nanoid(2),
      // });
      // console.log(this.state.contacts)
    this.reset();
  
    };  
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  
  
    
  render() {
    // const VisibleContacts = this.state.contacts.filter(contacts => contacts.text.toLoverCase().includes(this.state.filter.toLowerCase())
    // )
    return (
        <form onSubmit={this.handelSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handelInputChange}
            />
          </label>
          <label> Number
            <input
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handelInputChange}
            />
          </label>
          <button className={css.button} type="submit">Add contact</button>
        </form>
        
        // {/* <ul>
        //   {this.state.contacts.map(({ name, id, number }) => (
        //       <li key={id}>{name}:{number}</li>
        //   ))}
        // </ul> */}
          //  {/* <Filter filter={this.state.filter} contacts={this.state.contacts} onChange={this.changeFilter} /> */}
    );
  }
}

export default Form;

import {useState} from 'react';
import css from './Form.module.css'
// import { nanoid } from 'nanoid';
// import Filter from 'components/Filter/Filter';
const Form = ({onSubmitData}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

const handelInputChange = event => {
    const {name,  value } = event.target;
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      return;
   }
  };

 const handelSubmit = (event) => {
    event.preventDefault();

    let contact = { name: name, number: number };
   onSubmitData(contact);

      // this.state.contacts.push({
      // number: this.state.number,
      // name: this.state.name,
      // id: nanoid(2),
      // });
      // console.log(this.state.contacts)
   reset();
  
    };  
  const reset = () => {
    setName('');
    setNumber('');
  };
  

    return (
        <form onSubmit={handelSubmit}>
          <label>
            Name
            <input
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handelInputChange}
            />
          </label>
          <label> Number
            <input
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handelInputChange}
            />
          </label>
          <button className={css.button} type="submit">Add contact</button>
        </form>

    );

}

export default Form;

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './ContactList.module.css'

class ContactList extends React.Component {
  deleteId = Id => {
    this.props.del(Id);
  };
  createList = () => {
    return this.props.contacts.map(contact => {
      return (
        <li className={css.item} key={uuidv4()} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button className={css.button}
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul className={css.list}>{this.createList()}</ul>;
  }
}
// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   del: PropTypes.func.isRequired,
// };
ContactList.defaultProps = {
  contacts: [],
};

// const ContactList = ({ contacts }) => {
//     return (
//         <ul>
//         {contacts.map(({ name, id, number }) => (
//           <li key={id}>
//             {name}:{number}
//           </li>
//         ))}
//       </ul>
//     )
// }

export default ContactList
import { v4 as uuidv4 } from 'uuid';
import css from './ContactList.module.css'

const ContactList = ({del, contacts})=> {
 const  deleteId = Id => {
   del(Id);
  };
  const createList = () => {
    return contacts.map(contact => {
      return (
        <li className={css.item} key={uuidv4()} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button className={css.button}
            data-id={contact.id}
            onClick={() => deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };


    return <ul className={css.list}>{createList()}</ul>;
}
// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   del: PropTypes.func.isRequired,
// };
// ContactList.defaultProps = {
//   contacts: [],
// };

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
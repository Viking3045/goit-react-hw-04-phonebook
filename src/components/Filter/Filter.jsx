import React from 'react';
class Filter extends React.Component {

  filterValue = event => {
    let value =  event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  }
  render() {
    return (
       <div>
        <h2>Find contacts by name</h2>
        <input onChange={this.filterValue}  />
    </div>
    )
  }

}
// const Filter = ({ onChange, contacts, filter }) => {
//     const VisibleContacts = contacts.filter(contact=> contact.name.toLowerCase().includes(filter.toLowerCase()));
//   return (
//     <div>
//       <label>
//         Find contacts by name{' '}
//         <input onChange={onChange} type="text" value={filter} />
//       </label>
//       <ul>
//         {VisibleContacts.map(({ name, id, number }) => (
//           <li key={id}>
//             {name}:{number}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default Filter 

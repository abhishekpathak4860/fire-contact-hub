import ContactCard from './ContactCard';

export default function ContactList({ contacts, onOpen, RemovePlus, setSelectedContact, SearchFilter }) {
 const userValue=contacts.filter((item)=>
  item.Name.toLowerCase().includes(SearchFilter.toLowerCase())
)
  return (
    <div>
      {
        userValue.map((contactElement) => (
          <ContactCard setSelectedContact={setSelectedContact} RemovePlus={RemovePlus} onOpen={onOpen} key={contactElement.id} contactElement={contactElement} />
        ))
      }
    </div>
  )
}


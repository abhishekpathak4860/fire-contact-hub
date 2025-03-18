import { useEffect, useState } from "react";
import WrapNavAndSearch from "./WrapNavAndSearch";
import ContactList from "./ContactList";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Home() {
    const [contacts, setContacts] = useState([]);
      const [isOpen, setOpen] = useState(false);
      const [isPlus, setisPlus] = useState(false);
     const [SelectedContact,setSelectedContact]=useState(null);
     const [SearchFilter,setSearchFilter]=useState("");
    
      const ClickedPlus = () => {
        setisPlus(true);
        setSelectedContact(null)
      }
      const RemovePlus = () => {
        setisPlus(false);
      }
      const onOpen = () => {
        setOpen(true);
      }
    
      const onClose = () => {
        setOpen(false);
        setSelectedContact(null)
      }
    
      useEffect(() => {
        const getContacts = async () => {
          try {
            const ContactRef = collection(db, "Contacts");
               
            onSnapshot(ContactRef,(snapShot)=>{
              const getContactList = snapShot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data()
                }
              })
              setContacts(getContactList);
            }) 
          } catch (error) {
     console.log(error);
          }
        }
        getContacts()
      }, [])
    

  return (
   <>
     <div className="max-w-[370px] mx-auto">
        <WrapNavAndSearch setSearchFilter={setSearchFilter} ClickedPlus={ClickedPlus} onOpen={onOpen}/>
        <ContactList SearchFilter={SearchFilter} setSelectedContact={setSelectedContact} RemovePlus={RemovePlus} onOpen={onOpen} contacts={contacts} />
      </div>
      <AddAndUpdateContact  contactElement={SelectedContact} isPlus={isPlus} isOpen={isOpen} onClose={onClose} />
      <ToastContainer position='bottom-center'/>
   </>
  )
}

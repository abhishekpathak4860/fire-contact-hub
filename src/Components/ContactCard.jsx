import { doc, deleteDoc } from 'firebase/firestore';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from '../config/firebase';
import { toast } from 'react-toastify';



export default function ContactCard({ contactElement, onOpen, RemovePlus, setSelectedContact }) {

  const deleteContact = async (id) => {
    try {
      const ContactRef = doc(db, "Contacts", id);
      await deleteDoc(ContactRef);
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='custom-box'>
        <div className='mt-4 flex justify-around items-center bg-[#FFEAAE] p-2 rounded-md custom-width'>
          <div className='flex items-center w-[80%] gap-4'>
            <HiOutlineUserCircle className='text-[#F6820C] text-4xl min-w-[40px]' />
            <div className='w-[80%]' >
              <h1 className='font-medium break-words w-[100%]'>{contactElement.Name}</h1>
              <p className="text-sm break-words w-[100%]">{contactElement.Email}
              </p>
            </div>
          </div>
          <div className='flex'>
            <MdDelete onClick={() => deleteContact(contactElement.id)} className='text-4xl text-red-500 cursor-pointer' />
            <RiEditCircleLine onClick={() => { onOpen(); RemovePlus(); setSelectedContact(contactElement) }} className='text-4xl text-[#000000] cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}

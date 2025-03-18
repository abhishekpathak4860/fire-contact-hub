import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import Cardpopup from "./Cardpopup";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from "react-toastify";
import * as Yup from "yup";

const ContactSchema=Yup.object().shape({
    Name:Yup.string().required("* Please enter name"),
    Email:Yup.string().email("Invalid Email").required("* Please enter email")
});

export default function AddAndUpdateContact({ isOpen, onClose, isPlus, contactElement }) {
    const addContact = async (contacts) => {
        try {
            const ContactRef = collection(db, "Contacts");
            await addDoc(ContactRef, contacts)
            toast.success("Contact added successfully");
        } catch (error) {
            console.log(error);
        }
    }

    const UpdateContact = async (contacts, id) => {
        try {
            const ContactRef = doc(db, "Contacts", id);
            await updateDoc(ContactRef, contacts);
            toast.success("Contact updated successfully");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Cardpopup isOpen={isOpen} onClose={onClose}>
                <Formik
                 validationSchema={ContactSchema}
                initialValues={
                    contactElement ? {
                        Name: contactElement.Name,
                        Email: contactElement.Email,
                    } : {
                        Name: "",
                        Email: "",
                    }}
                    onSubmit={async (data) => {
                        try {
                            if (!contactElement) {
                                await addContact(data);
                            } else {
                                const obj1 = JSON.stringify({ Name: contactElement.Name, Email: contactElement.Email });
                                const obj2 = JSON.stringify(data);
                    
                                if (obj1 !== obj2) {
                                    await UpdateContact(data, contactElement.id);
                                } else {
                                    alert("Please make some changes to update the list");
                                    return;
                                }
                            }
                    
                            onClose(); 
                        } catch (error) {
                            console.log("Error submitting form:", error);
                        }
                    }}
                    
                >

                    <Form>
                        <div className="relative  flex flex-col gap-1 w-[90%] m-auto">
                            <label className="font-bold" htmlFor="name">Name</label>
                            <Field className="border-2 border-gray-400 rounded-md" type="text" name="Name" placeholder="Enter Name" />
                            
                            <div className="absolute top-full  text-red-500">
                                <ErrorMessage name="Name"/>
                            </div>
                        </div>

                        <div className="relative mt-4 flex flex-col gap-1 w-[90%] m-auto">
                            <label className="font-bold" htmlFor="email">Email</label>
                            <Field className="border-2 border-gray-400 rounded-md" type="email" name="Email" placeholder="Enter Email" />
                            <div className="absolute top-full text-red-500">
                                <ErrorMessage name="Email"/>
                            </div>
                        </div>


                        {isPlus ? (<button type="submit" className="cursor-pointer bg-[#FCCA3F] w-[120px] rounded-md flex float-right mr-4 mt-4 pl-3.5">Add Contact</button>) : (<button type="submit" className="cursor-pointer bg-[#FCCA3F] w-[140px] rounded-md flex float-right mr-4 mt-4 pl-3">Update Contact</button>)
                        }
                    </Form>
                </Formik>
            </Cardpopup>
        </div>
    )
}

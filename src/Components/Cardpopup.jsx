import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'

export default function Cardpopup({ onClose, isOpen, children }) {
    return createPortal(
        <>
            {
            isOpen && (
                <>
                    <div className="p-1 rounded-[10px] fixed left-[35%] bottom-[40%] z-50  min-h-[200px] w-[30%] bg-white custom-left">
                        <div className="flex justify-end"><AiOutlineClose className="text-2xl cursor-pointer" onClick={onClose} />
                        </div>
                        {children}
                    </div>
                    <div className="absolute top-0 h-[100vh]   w-screen backdrop-blur z-40"/>
                </>
            )
            }
        </>,
        document.getElementById("modal-root")
    )
}

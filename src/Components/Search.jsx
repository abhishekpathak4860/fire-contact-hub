import { CiSearch } from "react-icons/ci";
import { AiOutlinePlusCircle } from "react-icons/ai";


export default function Search({onOpen,ClickedPlus,setSearchFilter}) {
    const handleChange=(e)=>{
        setSearchFilter(e.target.value);
    }
  
    return (
        <div className="relative ml-4 flex  w-[350px] gap-2">
           <CiSearch className="text-white text-3xl absolute top-3 ml-2"/> 
           <input onChange={handleChange} className="border-1 border-white rounded-[10px] pt-2 pb-2 pl-10 placeholder-white w-[800px] text-white" type="text" placeholder="Search Contact" />
            <div className="rounded-[50%"><AiOutlinePlusCircle onClick={()=>{onOpen();ClickedPlus()}} className="h-[52px] w-[52px] cursor-pointer text-white "/>
            </div>
        </div>
    )
}

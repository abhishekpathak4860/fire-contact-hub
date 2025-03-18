import Navbar from "./Navbar";
import Search from "./Search";

export default function WrapNavAndSearch({setSearchFilter,ClickedPlus,onOpen}) {
  return (
   <div className="WrapNavAndSearch-style">
      <Navbar/>
      <Search setSearchFilter={setSearchFilter} ClickedPlus={ClickedPlus} onOpen={onOpen }/>
   </div>
  )
}

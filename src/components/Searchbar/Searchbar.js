import "./searchbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  return (
    <form className="question_searchForm">
    <div className="search_container">
      <SearchOutlinedIcon/>
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        className="Question_search"
        placeholder="Search"
        type="search"
        value={()=>{}}
        
        
      />
    </div>
 </form>
  )
}

export default Searchbar
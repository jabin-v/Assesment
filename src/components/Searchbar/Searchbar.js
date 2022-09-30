import "./searchbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);

    setSearchTerm("")
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="question_searchForm">
    <div className="search_container">
      <SearchOutlinedIcon/>
      <input
        name="search-field"
        autoComplete="off"
        id="search-field"
        className="Question_search"
        placeholder="Search"
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
        
      />
    </div>
 </form>
  )
}

export default Searchbar
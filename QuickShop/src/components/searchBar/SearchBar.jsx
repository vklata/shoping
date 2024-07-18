import { useState } from "react";
import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
   // Search State 
//    const [search, setSearch] = useState("");
   const [values, setValues] = useSearch();
   const navigate = useNavigate();
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const { data } = await axios.get(
         `https://back-seven-chi.vercel.app/api/search/${values.keyword}`,{ timeout: 5000}
       );
       setValues({ ...values, results: data });

       navigate("/search");
       
     } catch (error) {
       console.log(error);
     }
   };

  return(
<div>
<form
  className="d-flex search-form"
  role="search"
  onSubmit={handleSubmit}
>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={values.keyword}
   
    onChange={(e) => setValues({ ...values, keyword: e.target.value })}
  />
  <button className="btn  bg-orange-500 " type="submit">
    Search
  </button>
</form>
</div>
);
};


export default SearchBar;
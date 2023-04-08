import "../Styles/searchBar.css"

export default function SearchBar({search,setSearch}){
   
    function handleSearch(e){
        setSearch(e.target.value);
       }

       function handleForm(e){
       e.preventDefault()
       }

    return (
        <form onSubmit={handleForm}>
        <input className="searchBar" type="text" name="search" id="search" value={search} onChange={handleSearch} placeholder="Search your product"/>
       </form>
    )
}
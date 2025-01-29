
export default function Search({searchTerm, setSearchTerm}) {
  return (
    <div className="search">
        <div>
            <img src="search.png" alt="Search" />
            <input type="text"
            placeholder="Search through thousand of movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    </div>
  )
}

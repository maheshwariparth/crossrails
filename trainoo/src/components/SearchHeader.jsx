const SearchHeader = () => {
    return (
    <div className="search-bar m-2 d-grid gap-2">
        <div className="flex justify-content-start">
          <input type='text' placeholder='From' className='p-2 mx-2'></input>
          <input type='text' placeholder='To' className='p-2 mx-2'></input>
          <input type='date' placeholder='Date' className='p-2 mx-2'></input>
        </div>
        <div className="flex justify-content-start">
          <button type='button' className='search-button p-2 m-2 btn bg-primary-subtle'>Find trains</button>
        </div>
    </div>
    );
}

export default SearchHeader;
const SearchBox = ({ handleInputChange, searchItem }) => {
  return (
    <div>
      <span>Find contacts by name</span>
      <input type="text" value={searchItem} onChange={handleInputChange} />
    </div>
  );
};
export default SearchBox;

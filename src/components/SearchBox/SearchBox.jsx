import s from "./SearchBox.module.css";
const SearchBox = ({ handleInputChange, searchItem }) => {
  return (
    <div className={s.container}>
      <span>Find contacts by name</span>
      <input type="text" value={searchItem} onChange={handleInputChange} />
    </div>
  );
};
export default SearchBox;

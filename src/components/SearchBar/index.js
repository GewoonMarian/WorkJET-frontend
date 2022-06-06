function SearchForm(props) {
  return (
    <div>
      <label htmlFor="name search">Search by name: </label>
      <input
        id="name search"
        type="text"
        placeholder="Type a name"
        onChange={props.liftNameFilter}
      ></input>
    </div>
  );
}

export default SearchForm;

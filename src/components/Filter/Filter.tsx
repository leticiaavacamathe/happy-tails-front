const Filter = (): React.ReactElement => {
  return (
    <select className="filter__select" aria-label="filter by category">
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
    </select>
  );
};

export default Filter;

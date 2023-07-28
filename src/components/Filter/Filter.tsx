import FilterStyled from "./FilterStyled";

const Filter = (): React.ReactElement => {
  return (
    <FilterStyled className="filter">
      <select className="filter__select" aria-label="filter by category">
        <option value="All">All</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
      </select>
    </FilterStyled>
  );
};

export default Filter;

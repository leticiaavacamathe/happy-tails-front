const AddAnimalForm = () => {
  return (
    <form>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Type of animal
        </label>
        <select id="type" className="add-form-control__input">
          <option value="cat">Dog</option>
          <option value="dog">Cat</option>
        </select>
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="name">
          Name
        </label>
        <input type="text" className="add-form-control__input" id="name" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="city">
          City
        </label>
        <input type="text" className="add-form-control__input" id="city" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="age">
          Age
        </label>
        <input type="number" className="add-form-control__input" id="age" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="sex">
          Sex
        </label>
        <input type="text" className="add-form-control__input" id="sex" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="weight">
          Weight (kg)
        </label>
        <input type="number" className="add-form-control__input" id="weight" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="image">
          URL image
        </label>
        <input type="url" className="add-form-control__input" id="image" />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          className="add-form-control__input"
          id="description"
        />
      </div>
      <button>Create</button>
    </form>
  );
};

export default AddAnimalForm;

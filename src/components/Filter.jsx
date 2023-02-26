export const Filter = ({ changeFilter, filter }) => {
  return (
    <form>
      <label>
        <span className="text-2xl pr-2">Filter</span>
        <input
          type="text"
          name="name"
          className="border border-black"
          onChange={changeFilter}
          value={filter}
        />
      </label>
    </form>
  );
};

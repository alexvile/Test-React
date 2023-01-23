export const Filter = ({ onChange, value }) => {
  return (
    <>
      <label className="inline-block m-1">
        <span>Filter</span>
        <input
          type="text"
          className="border px-2"
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
};

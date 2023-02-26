import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  }
  //   function formReset() {
  //     setName('');
  //     setNumber('');
  //   }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, number });
    // formReset();
  }

  return (
    <form className="border border-black w-fit p-3" onSubmit={handleSubmit}>
      <label className="block ">
        <span className="text-2xl pr-2">Name</span>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          className="border border-black"
        />
      </label>
      <label className="block">
        <span className="text-2xl pr-2">Number</span>
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          className="border border-black"
        />
      </label>
      <button
        type="submit"
        className="border p-2 my-2 bg-red-300 text-white hover:opacity-75"
      >
        Add contact
      </button>
    </form>
  );
};

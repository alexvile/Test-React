import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form action="/post" onSubmit={this.handleSubmit}>
        <label className="inline-block p-1">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            className="border px-2"
            value={name}
            required
          />
        </label>
        <br />
        <label className="inline-block p-1">
          Phone
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            className="border px-2"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button
          type="submit"
          className="border bg-red-300 rounded-lg p-1 hover:opacity-70 transition-opacity	"
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

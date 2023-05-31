import React from "react";
import { nanoid } from "nanoid";


const INITIAL_STATE = {
  phone: "",
  name: "",
  married: false,
};

const nameId = nanoid(); //ksjdklfj-jisdjfiks
const phoneId = nanoid();

const cities = [
  { name: "Kharkiv", id: 1 },
  { name: "Odesa", id: 2 },
  { name: "Kyiv", id: 3 },
];

export class Form extends React.Component {
  state = {
    ...INITIAL_STATE,
  };
  onSubmit = (e) => {
    e.preventDefault();
    //const form = new FormData(e.currentTarget);
    //const name = form.get("name");

    console.warn(this.state); // logic
    this.setState({ ...INITIAL_STATE });
  };
  onChange = ({ target }) => {
    if (target.name === "name") {
      const newValue = target.value.replace(/[0-9]/g, "");
      this.setState({ name: newValue });
    } else {
      this.setState({ [target.name]: target.value });
    }
  };
  onCheck = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  };
  onSelectChange = (e) => {
    this.setState({ citySelected: e.target.value });
  };
  render() {
    const { phone, name, married } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor={phoneId}>Phone number: </label>
        <input
          id={phoneId}
          type="number"
          onChange={this.onChange}
          value={phone}
          name="phone"
          placeholder="Enter your phone"
        />
        <label htmlFor={nameId}>Name: </label>
        <input
          id={nameId}
          onChange={this.onChange}
          value={name}
          name="name"
          placeholder="Enter your name"
        />
        <label>Are you married? :</label>
        <input
          name="married"
          onChange={this.onCheck}
          checked={married}
          type="checkbox"
        />
        {married && (
          <>
            <label>Spouse name: </label>
            <input />
          </>
        )}
        <select onChange={this.onSelectChange}>
          <option value="..." disabled />
          {cities.map((city) => (
            <option value={city.id} id={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

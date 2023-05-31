import React from "react";
import { withFormik } from "formik";

class FormOriginal extends React.Component {
  onChangeEvent = (e) => {
    this.props.handleChange(e);
  };
  render() {
    const { phone, name, married } = this.props.values;
    const { handleSubmit, errors } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>Phone number: </label>
        <input
          type="number"
          onChange={this.onChangeEvent}
          value={phone}
          name="phone"
          placeholder="Enter your phone"
        />
        <label>Name: </label>
        <input
          onChange={this.onChangeEvent}
          value={name}
          name="name"
          placeholder="Enter your name"
        />
        <label>Are you married? :</label>
        <input
          name="married"
          onChange={this.onChangeEvent}
          checked={married}
          type="checkbox"
        />
        {married && (
          <>
            <label>Spouse name: </label>
            <input />
          </>
        )}
        <button type="submit">Submit</button>
        {errors && (
            <span>{errors.name}</span>
        )}
      </form>
    );
  }
}

export const Form = withFormik({
  mapPropsToValues: () => ({
    phone: "",
    name: "",
    married: false,
  }),
  handleSubmit: (values, bag) => {
    bag.resetForm();
    bag.setErrors({name: "Name is not correct"});
  }
})(FormOriginal);

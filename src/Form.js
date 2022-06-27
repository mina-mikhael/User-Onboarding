import React from "react";

const Form = (props) => {
  const { onSubmit, onChange, values, disabled, errors } = props;

  const submitHandler = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  const changeHandler = (evt) => {
    const { name, checked, type } = evt.target;
    let value = type === "checkbox" ? checked : evt.target.value;

    onChange(name, value);
  };

  return (
    <div>
      <h1>User Onboarding</h1>
      <h3>Please enter your information below: </h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            First Name &nbsp;
            <input type="text" name="first_name" value={values.first_name} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Last Name &nbsp;
            <input type="text" name="last_name" value={values.last_name} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Password &nbsp;
            <input type="password" name="password" value={values.password} onChange={changeHandler} />
          </label>
        </div>
        <div>
          <label>
            {" "}
            Email &nbsp;
            <input type="text" name="email" value={values.email} onChange={changeHandler} />
          </label>
        </div>

        <label>
          {" "}
          Agree terms of services
          <input type="checkbox" name="terms" checked={values.terms} onChange={changeHandler} />
        </label>

        <button disabled={disabled}> submit </button>
        <div className="errors">
          <p>{errors.first_name}</p>
          <p>{errors.last_name}</p>
          <p>{errors.email}</p>
          <p>{errors.password}</p>
          <p>{errors.terms}</p>
        </div>
      </form>
      <div>
        {" "}
        <h2>Friends List</h2>
      </div>
    </div>
  );
};

export default Form;

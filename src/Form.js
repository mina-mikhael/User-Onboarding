import React from "react";

const Form = (props) => {
  const { onSubmit, onChange, values, disabled, errors } = props;

  const changeHandler = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;

    onChange(name, valueToUse);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    onSubmit();
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
          <input type="checkbox" name="terms" value={values.terms} onChange={changeHandler} />
        </label>

        <button disabled={disabled}> submit </button>
        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.terms}</div>
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

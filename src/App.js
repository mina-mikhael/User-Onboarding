import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";
import Forms from "./Form";
import Friend from "./Friend";

///////////// -- Initial States-- /////////////

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: false,
};
const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  terms: false,
};
const initialFriends = [];
const initialDisabled = true;

function App() {
  ///////////// -- States-- /////////////
  const [friends, setFriends] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  ///////////// -- helpers-- /////////////
  const getFriends = () => {
    axios
      .get("https://reqres.in/api/users/")
      .then((res) => {
        console.log("get:   ", res);
        setFriends(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewFriend = (newFriend) => {
    axios
      .post("https://reqres.in/api/users/", newFriend)
      .then((res) => {
        console.log("post  :", res);
        setFriends([...friends, res.data]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
        // console.log(err);
      });
  };

  ///////////// -- event handlers-- /////////////
  const changeHandler = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = () => {
    const newFriend = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      password: formValues.password,
      email: formValues.email.trim(),
      terms: formValues.terms,
    };
    postNewFriend(newFriend);
  };
  ///////////// -- side effects-- /////////////
  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((enabled) => setDisabled(!enabled));
  }, [formValues]);

  return (
    <div className="App">
      <Forms values={formValues} onChange={changeHandler} onSubmit={submitHandler} disabled={disabled} errors={formErrors} />

      {friends.map((frnd) => {
        return (
          <div key={frnd.id}>
            <Friend details={frnd} />
          </div>
        );
      })}
    </div>
  );
}

export default App;

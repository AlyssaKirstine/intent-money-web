import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from '../firebase'

import { css } from '@emotion/core';

import Button from '../components/Button'
import Container from '../components/Container'
import Field from '../components/Field'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Container>
      <div className="background-rectangle-red-orange"></div>
      <Container.Section>
        <h2>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <Field.Container>
            <Field>
              <label>First Name</label>
              <input name="first-name" type="text" />
            </Field>
            <Field>
              <label>Last Name</label>
              <input name="last-name" type="text" />
            </Field>
          </Field.Container>
          <Field>
            <label>Email</label>
            <input name="email" type="email" placeholder="Email" />
          </Field>
          <Field>
            <label>Date of birth</label>
            <input name="dob" type="text" placeholder="MM/DD/YYYY" />
          </Field>
          {/* <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label> */}
          <span>By proceeding you agree to our Privacy Policy</span>
          <br />
          <Button type="submit">Confirm details</Button>
        </form>
      </Container.Section>
      <div className="background-rectangle-red-orange bottom"></div>
    </Container>
  );
};

export default withRouter(SignUp);
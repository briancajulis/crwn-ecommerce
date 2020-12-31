import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentails, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentails;
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentails, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email & password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          value={email}
          required
          type='email'
          handleChange={handleChange}
          label='email'
        />
        <FormInput
          name='password'
          value={password}
          required
          type='password'
          handleChange={handleChange}
          label='password'
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

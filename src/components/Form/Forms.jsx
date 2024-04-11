import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthProvider';
import { FormButton } from '../Button/Buttons';
import './Form.css'

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateSchoolEmail = (email) => {
  if ( String(email)
  .toLowerCase()
  .match(/^[a-zA-Z0-9._%+-]+@schoolbase\.edu$/) ) {
    return true
  } else {
    return false
  }
};

// LOGIN FORM
export const LogInForm = () => {
  // STATE
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // ERROR MESSAGES
  const EmailErrorMessage = () => {
    return (
      <p className="field-error">Please enter a valid SchoolBase email address</p>
    );
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="field-error">Password should have at least 8 characters</p>
    );
  };

  // SUBMISSION FUNCTIONS
  const getIsFormValid = () => { 
    return ( 
      validateSchoolEmail(email.value) && 
      password.value.length >= 8 
    ); 
  }; 
  
  const clearForm = () => {
    setEmail({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  // HANNDLE SIGNIN FORM SUBMISSION
  const { setLoading, signIn } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await signIn(email.value, password.value);
      alert("Login successful!");  
      navigate("/software")
    } catch (e) {
      setError(e.message)
      alert(e.message);
    }

    setLoading(false);
    clearForm();
  };

  return (
    <div>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          md:w-[630px] min-w-[420px] bg-white text-black p-12 shadow-black-800 shadow-md 
        `}
      >
        <fieldset className='flex flex-col gap-5'>
          {/* EMAIL */}
          <div className='field'>
            <div>
              <label htmlFor="loginEmail">Email:</label>
            </div>
            <input 
              id='loginEmail'
              type="email" 
              value={email.value}
              placeholder='Email Address'
              onChange={(e) => { 
                setEmail({ ...email, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setEmail({ ...email, isTouched: true }); 
              }} 
            />
            {
              email.isTouched && !validateSchoolEmail(email.value)? 
              ( <EmailErrorMessage /> ) :
              null
            } 
          </div>

          {/* PASSWORD */}
          <div className='field'>
            <div>
              <label htmlFor="signupPassword">Password </label>
            </div>
            <input 
              id='signupPassword'
              type="password" 
              value={password.value}
              placeholder='Password'
              required
              onChange={(e) => { 
                setPassword({ ...password, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setPassword({ ...password, isTouched: true }); 
              }} 
            />
            {
              password.isTouched && password.value.length < 8 ? 
              ( <PasswordErrorMessage /> ) :
              null
            } 
          </div>

          {/* CHECKBOX */}
          <div className='flex gap-[10px]'>
            <input
              id='remember'
              type="checkbox"
              checked={remember}
              onChange={(e) => {
                setRemember(e.target.checked);
              }}
            />
            <label htmlFor="remember" className='font-semibold text-[#595959]'>Remember me</label>
          </div>
          
          <div className='mt-[20px] self-end flex justify-center items-center gap-6'>
            {/* FORGOT PASSWORD */}
            <Link to={`/forgotPassword`} className='font-semibold text-[#595959] text-sm md:text-base hover:text-primary-00 hover:underline transition-all duration-300'>Forgot your password?</Link>

            {/* SUBMIT BUTTON */}
            <FormButton disabled={!getIsFormValid()} className={`w-[150px] `}>LOGIN</ FormButton>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

// SIGNUP FORM
export const SignUpForm = () => {
  const navigate = useNavigate()

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [error, setError] = useState('');

  // Error Messages
  const EmailErrorMessage = () => {
    return (
      <p className="field-error">Please enter a valid SchoolBase Email Adresss</p>
    );
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="field-error">Password should have at least 8 characters</p>
    );
  };

  const ConfirmPasswordErrorMessage = () => {
    return (
      <p className="field-error">Passwords should be the same</p>
    );
  };

  // FORM SUBMISSIONS
  const getIsFormValid = () => { 
    if ( fullName && validateSchoolEmail(email.value) && password.value.length >= 8 && confirmPassword.value === password.value ) {
      return true
    } else {
      return false
    }
  }; 
  
  const clearForm = () => {
    setFullName("");
    setEmail({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    })
  };

  // HANDLE SIGNUP FORM SUBMISSION
  const { setLoading, createUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')

    try {
      setLoading(true);
      await createUser(email.value, password.value);
      navigate("/login")
    } catch (e) {
      setError(e.message)
      alert(e.message);
    }

    setLoading(false);
    clearForm();
  };

  return (
    <div>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          md:w-[630px] min-w-[420px] bg-white text-black p-12 shadow-black-800 shadow-md
        `}
      >
        <fieldset className='flex flex-col gap-5'>
          {/* NAME */}
          <div className='field'>
            <div>
              <label htmlFor="fullName">Name </label>
            </div>
            <input 
              id='fullName'
              type="text" 
              value={fullName}
              placeholder='Enter First and Last Name'
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className='field'>
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <input 
              id='email'
              type="email" 
              value={email.value}
              placeholder='Email Address'
              required
              onChange={(e) => { 
                setEmail({ ...email, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setEmail({ ...email, isTouched: true }); 
              }} 
            />
            {
              email.isTouched && !validateSchoolEmail(email.value)? 
              ( <EmailErrorMessage /> ) :
              null
            } 
          </div>

          {/* PASSWORD */}
          <div className='field'>
            <div>
              <label htmlFor="password">Password </label>
            </div>
            <input 
              id='password'
              type="password" 
              value={password.value}
              placeholder='Password'
              required
              onChange={(e) => { 
                setPassword({ ...password, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setPassword({ ...password, isTouched: true }); 
              }} 
            />
            {
              password.isTouched && password.value.length < 8 ? 
              ( <PasswordErrorMessage /> ) :
              null
            } 
          </div>

          {/* CONFIRM PASSWORD */}
          <div className='field'>
            <div>
              <label htmlFor="confirmPassword">Confirm Password </label>
            </div>
            <input 
              id='confirmPassword'
              type="password" 
              value={confirmPassword.value}
              placeholder='Confirm Password'
              required
              onChange={(e) => { 
                setConfirmPassword({ ...confirmPassword, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setConfirmPassword({ ...confirmPassword, isTouched: true }); 
              }} 
            />
            {
              confirmPassword.isTouched && confirmPassword.value !== password.value ? 
              ( <ConfirmPasswordErrorMessage /> ) :
              null
            } 
          </div>
          
          {/* SUBMIT BUTTON */}
          <FormButton disabled={!getIsFormValid()} className={`w-[150px] mt-[20px] self-end ${!getIsFormValid() && 'bg-slate-400'}`}>SIGN UP</ FormButton>
        </fieldset>
      </form>
    </div>
  )
}

// FORGOT PASSWORD FORM
export const ForgotPasswordForm = () => {
  // STATE
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  // ERROR MESSAGES
  const EmailErrorMessage = () => {
    return (
      <p className="field-error">Please enter a valid SchoolBase email address</p>
    );
  };

  // SUBMISSION FUNCTIONS
  const getIsFormValid = () => { 
    return ( 
      validateSchoolEmail(email.value)
    ); 
  }; 
  
  const clearForm = () => {
    setEmail({
      value: "",
      isTouched: false,
    });
  };

  // HANDLE FORGOT PASSWORD FORM SUBMISSION
  const { setLoading, resetPassWord } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      setLoading(true);
      await resetPassWord(email.value);
      setMessage("Reset Password Email Sent!\n Check Inbox for further details");  
    } catch (e) {
      setError(e.message)
      alert(e.message);
    }

    clearForm();
    setLoading(false);
  };

  return (
    <div>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          md:w-[630px] min-w-[420px] bg-white text-black p-12 drop-shadow-md rounded-sm
        `}
      >
        {message && <p className='bg-primary-100 font-semibold text-primary-900 text-sm text-center py-4 px-4 my-2 rounded-sm'>{message}</p>}
        <fieldset className='flex flex-col gap-5'>
          {/* EMAIL */}
          <div className='field'>
            <div>
              <label htmlFor="loginEmail">Email:</label>
            </div>
            <input 
              id='loginEmail'
              type="email" 
              value={email.value}
              placeholder='Email Address'
              onChange={(e) => { 
                setEmail({ ...email, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setEmail({ ...email, isTouched: true }); 
              }} 
            />
            {
              email.isTouched && !validateSchoolEmail(email.value)? 
              ( <EmailErrorMessage /> ) :
              null
            } 
          </div>
          
          <div className='mt-[20px] self-end flex justify-center items-center gap-6'>
            {/* SUBMIT BUTTON */}
            <FormButton disabled={!getIsFormValid()} className={`w-[150px] ${!getIsFormValid() && 'bg-slate-400'}`}>RESET</ FormButton>
          </div>
        </fieldset>
      </form>
    </div>
  )
}


// export const validateEmail2 = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     );
// };

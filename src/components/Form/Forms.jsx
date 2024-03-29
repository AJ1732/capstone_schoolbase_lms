import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../../fireBase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { FormButton } from '../Button/Buttons';
import './Form.css'

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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
  const navigate = useNavigate()

  // ERROR MESSAGES
  const EmailErrorMessage = () => {
    return (
      <p className="field-error">Please enter a valid Email Adresss</p>
    );
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="field-error">Password should have at least 8 characters</p>
    );
  };

  const SubmitErrorMessage = () => {
    return (
      <p className="field-error">Please complete the form above</p>
    );
  };

  // SUBMISSION FUNCTIONS
  const getIsFormValid = () => { 
    return ( 
      validateEmail(email.value) && 
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

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful!");
      navigate("/software")
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage)
      console.log(errorCode, errorMessage)
    })

    clearForm();
  };

  return (
    <div>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          min-w-[630px] bg-white text-black p-12 drop-shadow-lg
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
              email.isTouched && validateEmail(email.value) == null ? 
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
            <p className='font-semibold text-[#595959]'>Forgot your password?</p>

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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const EmailErrorMessage = () => {
    return (
      <p className="field-error">Please enter a valid Email Adresss</p>
    );
  };

  const PasswordErrorMessage = () => {
    return (
      <p className="field-error">Password should have at least 8 characters</p>
    );
  };

  const getIsFormValid = () => { 
    return ( 
      fullName && 
      validateEmail(email.value) && 
      password.value.length >= 8 
    ); 
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Sign up successfull.! Login")
      navigate("/login")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode, errorMessage);
    });

    clearForm();
  };

  return (
    <div>
      <form 
        action="" 
        onSubmit={handleSubmit}
        className={`
          min-w-[630px] bg-white text-black p-12 drop-shadow-lg
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
              placeholder='Enter Full Name'
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
              email.isTouched && validateEmail(email.value) == null ? 
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
          
          {/* SUBMIT BUTTON */}
          <FormButton disabled={!getIsFormValid()} className={`w-[150px] mt-[20px] self-end`}>SIGN UP</ FormButton>
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

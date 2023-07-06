import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from "../../Firebase/firebase.init";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
 const auth = getAuth(app);

const Register = () => {
  const [successStatus, setSuccessStatus] = useState(false);
  const [firebaseError, setFirebaseError]  = useState('');
  const [userEmail, setUserEmail]  = useState('');
  // console.log(firebaseError);
  const {
    register,
    formState: { errors },
    handleSubmit, reset 
  } = useForm();

  if (errors.email?.message) {
    window.location.reload();
  }

  const {signIn} = useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data)
    // setSuccessStatus(false);
    signIn(data.email, data.password)
    .then((result) => {
      const user = result.user;
      setSuccessStatus(true);
      setFirebaseError('');
      console.log(user)
    })
    .catch((error) => {
      console.log(error.message);
      setFirebaseError(error.message)
      // setSuccessStatus(false);
      // window.location.reload();
      reset();
    })
  };



  const handleSignOut = () => {
       signOut(auth)
       .then(() => {
          setSuccessStatus(false)
        
       })
       .catch((error) => {
        // error message
       })
  }
  const handleBlur = event => {
    setUserEmail(event.target.value);
    console.log(event.target.value)  
  }

  const handleForgetPassword = () => {
      sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert('Password reset succesful')
        setFirebaseError('')
      })
      .catch((error) => {
        console.log(error.message);
      })
  }
  return (
    <div>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="hero min-h-screen bg-base-200"
    >      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
          "Welcome back! We're glad to see you here. Enter your credentials and unlock a world of possibilities. Let's make today productive and inspiring together."
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("email", { required: "Email Address is required"})} on="true"
              aria-invalid={errors.email ? "true" : "false"} onBlur={handleBlur} 
            />
            {errors.email && <p className="text-red-600 text-xs">{errors.email?.message}</p>}
           

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password"
              className="input input-bordered"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <p onClick={handleForgetPassword} className="text-blue-600 text-xs hover:underline underline-offset-8">Forget Password</p>
            {errors.password && <p className="text-red-600 text-xs">{errors.password?.message}</p>}
            {firebaseError && <p className="text-red-600 text-xs">{firebaseError}</p>}


            <div className="form-control mt-6">
              <input className="btn bg-custom-pink hover:bg-hover-color" type="submit" value="Login" />
              <p className="text-xs">New to this site? <Link className="text-blue-600 text-xs" to="/register">Register now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div>
     {successStatus ? (<p>Succesfully signed in</p>, <button className="btn bg-custom-pink hover:bg-hover-color" onClick={handleSignOut}>Sign Out</button>) : (<p>Successfully signed out</p>)}
    </div>
    </div>
  );
};

export default Register;

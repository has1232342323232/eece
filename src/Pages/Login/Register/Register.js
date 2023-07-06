import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth';
import app from "../../../Firebase/firebase.init";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
 const auth = getAuth(app);

const Register = () => {
  const [firebaseError, setFirebaseError]  = useState('');
  // console.log(firebaseError);
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then( () => {
      alert("a verification email is sent to your inbox .Cheak your email inbox and span folder")
    })
  }
  const {
    register,
    formState: { errors },
    handleSubmit, reset 
  } = useForm();

  const {createUser} = useContext(AuthContext)
  const onSubmit = (data) => {
    // console.log(data)

    createUser(data.email, data.password)
    .then((result) => {
        verifyEmail();
        console.log(result.user);
        console.log("successful")
    })
    .catch((error) => {
      // console.log(error.code, error.message);
      setFirebaseError(error.message);

    })
    reset(); 
  };

  return (
    <form
    
      onSubmit={handleSubmit(onSubmit)}
      className="hero min-h-screen bg-base-200"
    >      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
              {...register("email", { required: "Email Address is required"})}
              aria-invalid={errors.email ? "true" : "false"}
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
            {errors.password && <p className="text-red-600 text-xs">{errors.password?.message}</p>}

            {firebaseError && <p className="text-red-600 text-xs">{firebaseError}</p>}


            <div className="form-control mt-6">
              <input className="btn bg-custom-pink hover:bg-hover-color" type="submit" value="Register" />
              <p className="text-xs">Already have an account? <Link className="text-blue-600 " to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

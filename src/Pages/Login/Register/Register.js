import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth';
import app from "../../../Firebase/firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
 const auth = getAuth(app);

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const [firebaseError, setFirebaseError]  = useState('');
  // console.log(firebaseError);
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then( () => {
      toast('Sending Email')
      alert("a verification email is sent to your inbox .Cheak your email inbox and span folder also")
    })
  }
  const {
    register,
    formState: { errors },
    handleSubmit, reset 
  } = useForm();

  const {createUser, updateUser} = useContext(AuthContext)
  const onSubmit = (data) => {
    console.log("SignUp Data", data)

    createUser(data.email, data.password)
    .then((result) => {

        verifyEmail();
       const userInfo = {
        displayName: data.name,
      }

      updateUser(userInfo)

      .then(() => {})
      .catch((error) => console.log(error))
      console.log(result.user);
      toast.success('User created succesfully');
      const registeredUser = {
        name: data.name,
        email: data.email,
        department_name: data.department_name,
        session: data.session,
        roll: data.roll,
        reg: data.reg,
        fathers_name: data.fathers_name,
        mothers_name: data.mothers_name

      }
         
      // send data to the server
     fetch('https://eece-server.vercel.app/allRegisterUsers', {
      method: 'POST',
      body: JSON.stringify(registeredUser),
      headers: {
        'Content-type': 'application/json'
      },
     })
     .then(res=> res.json())
     .then(data => console.log(data))
     navigate(from, {replace: true}); 

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
              <span className="label-text">Name</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("name", { required: "Name is required"})}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-600 text-xs">{errors.name?.message}</p>}

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
              <span className="label-text">Department Name</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("department_name", { required: "Department name is required"})}
              aria-invalid={errors.department_name ? "true" : "false"}
            />
            {errors.department_name && <p className="text-red-600 text-xs">{errors.department_name?.message}</p>}

            <label className="label">
              <span className="label-text">Session</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("session", { required: "Session is required"})}
              aria-invalid={errors.session ? "true" : "false"}
            />
            {errors.session && <p className="text-red-600 text-xs">{errors.session?.message}</p>}

            <label className="label">
              <span className="label-text">Roll No</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("roll", { required: "Roll is required"})}
              aria-invalid={errors.roll ? "true" : "false"}
            />
            {errors.roll && <p className="text-red-600 text-xs">{errors.roll?.message}</p>}

            <label className="label">
              <span className="label-text">Reg. No</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("reg", { required: "Reg. No is required"})}
              aria-invalid={errors.reg ? "true" : "false"}
            />
            {errors.reg && <p className="text-red-600 text-xs">{errors.reg?.message}</p>}

            <label className="label">
              <span className="label-text">Father's Name</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("fathers_name", { required: "Email Address is required"})}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.fathers_name && <p className="text-red-600 text-xs">{errors.fathers_name?.message}</p>}


            <label className="label">
              <span className="label-text">Mother's Name</span>
            </label>
            <input type="text"
              className="input input-bordered"
              {...register("mothers_name", { required: "Mother's Name is required"})}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.mothers_name && <p className="text-red-600 text-xs">{errors.mothers_name?.message}</p>}           

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

import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
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
            <input 
              className="input input-bordered"
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p className="text-red-600">{errors.mail?.message}</p>}

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input 
              className="input input-bordered"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

            <div className="form-control mt-6">
              <input className="btn bg-custom-pink hover:bg-hover-color" type="submit" value="Login" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

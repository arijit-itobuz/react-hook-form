import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "Arijit Das",
      email: "arijit@itobuz.com",
      phone: "1234567890",
      address: "Earth",
      password: "arijit-pass ",
    },
  });
  // console.log(errors);
  // console.log(watch());
  // console.log(watch('name'));

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-cyan py-2">
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p className="error-msg">{errors.name?.message}</p>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          <p className="error-msg">{errors.email?.message}</p>
          <input
            type="number"
            name="phone"
            placeholder="enter phone"
            {...register("phone", {
              valueAsNumber: true,
              required: "Phone is required",
              minLength: {
                value: 10,
                message: "Phone needs to be 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Phone needs to be 10 characters",
              },
            })}
          />
          <p className="error-msg">{errors.phone?.message}</p>
          <input
            type="text"
            name="address"
            placeholder="enter address"
            {...register("address", {
              required: "Address is required",
            })}
          />
          <p className="error-msg">{errors.address?.message}</p>
          <input
            type="password"
            name="password"
            placeholder="enter password"
            {...register("password", {
              required: {
                value: true,
                message: 'Password is required'
              },
              minLength: {
                value: 8,
                message: "Password needs to be minimum of 8 characters",
              },
              maxLength: {
                value: 100,
                message: "Password cannot exceed 100 characters",
              },
            })}
          />
          <p className="error-msg">{errors.password?.message}</p>

          <input
            type="submit"
            value="Submit"
            className="btn btn-submit"
            disabled={!isValid}
          />
          <input
            type="button"
            value="Reset"
            className="btn btn-reset"
            onClick={() => reset()}
          />
        </form>
      </div>
    </>
  );
}

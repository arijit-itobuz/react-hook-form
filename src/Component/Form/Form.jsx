import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isDirty,
      dirtyFields,
      touchedFields,
      isSubmitSuccessful,
      submitCount,
      isSubmitting,
      isValidating,
    },
    reset,
    watch,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange", // catch properties onChange
    defaultValues: {
      user: {
        name: "Arijit Das",
        email: "arijit@itobuz.com",
        phone: "1234567890",
        address: "Earth",
        password: "arijit-pass ",
      },
    },
  });
  // console.log('errors', errors);
  // console.log('isValid', isValid);
  // console.log('watch', watch());
  // console.log('watch', watch('name'));
  // console.log('watch', watch(['name', 'address']));
  // console.log('isDirty', isDirty);
  // console.log('dirtyFields', dirtyFields);
  // console.log('touchedFields', touchedFields);
  // console.log('isSubmitSuccessful', isSubmitSuccessful);
  // console.log('submitCount', submitCount);
  // console.log('isSubmitting', isSubmitting);
  // console.log('isValidating', isValidating);

  const onSubmit = (data) => {
    console.log("data.user", data.user);
  };

  return (
    <>
      <div className="bg-cyan py-2">
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="enter name"
            {...register("user.name", {
              required: "Name is required",
            })}
          />
          <p className="error-msg">{errors.user?.name?.message}</p>

          <input
            type="email"
            placeholder="enter email"
            {...register("user.email", {
              required: "Email is required",
            })}
          />
          <p className="error-msg">{errors.user?.email?.message}</p>

          <input
            type="number"
            placeholder="enter phone"
            {...register("user.phone", {
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
          <p className="error-msg">{errors.user?.phone?.message}</p>

          <input
            type="text"
            placeholder="enter address"
            {...register("user.address", {
              required: "Address is required",
            })}
          />
          <p className="error-msg">{errors.address?.message}</p>

          <input
            type="password"
            placeholder="enter password"
            {...register("user.password", {
              required: {
                value: true,
                message: "Password is required",
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
          <p className="error-msg">{errors.user?.password?.message}</p>

          {/* Submit */}
          <input
            type="submit"
            value="Submit"
            className="btn btn-submit"
            disabled={!isValid}
          />

          {/* Reset */}
          <input
            type="button"
            value="Reset"
            className="btn btn-reset"
            onClick={() => reset()}
          />

          {/* Set Value */}
          <input
            type="button"
            value="Set Value"
            className="btn btn-reset"
            // onClick={() => setValue('user.name', 'Divya Jain', { shouldDirty: true })}
            onClick={() =>
              setValue(
                "user",
                {
                  // not recommend way
                  name: "Vivek Jain",
                  email: "vivek@yahoo.com",
                  phone: "0987654321",
                  address: "Mars",
                  password: "vivek-pass",
                },
                { shouldDirty: true }
              )
            }
          />

          {/* Trigger */}
          <input
            type="button"
            value="Trigger"
            className="btn"
            onClick={async () => {
              const output = await trigger(["name", "email"]);
              console.log("trigger", output);
            }}
          />
        </form>
      </div>
    </>
  );
}

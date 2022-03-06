import React from "react";
import "../App.css";
import { useFormik } from "formik";
import validationSchema from "./validations";
function SignUp() {
  const { handleSubmit, values, handleChange,errors,touched,handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema:validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log('errors', errors)
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        {/* <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
        <input
          value={values.email}
          name="email"
          placeholder="Email"
          type={"email"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {
            errors.email && touched.email && (<div className="error">{errors.email}</div>)
        }

        <label>Password</label>
        {/* <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
        <input
          value={values.password}
          name="password"
          placeholder="Password"
          type="password"
          onBlur={handleBlur}
          onChange={handleChange}
        />
         {
            errors.password && touched.password && (<div className="error">{errors.password}</div>)
        }

        <br />
        <br />
        <label>Password</label>
        {/* <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
        <input
          value={values.passwordConfirm}
          name="passwordConfirm"
          placeholder="Confirm Password"
          type={"password"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
         {
            errors.passwordConfirm && touched.passwordConfirm && (<div className="error">{errors.passwordConfirm}</div>)
        }
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default SignUp;

import "./App.css";
import {  useFormik } from "formik";

function App() {
  const {handleSubmit,values,handleChange} = useFormik({
    initialValues: {
      firstName: "Oğuzhan",
      lastName: "Belli ",
      email: "ogibelli2@gmail.com",
      gender: "female",
      hobbies: [],
      country: "Turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          placeholder="Jane"
          value={values.firstName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        {/* <Field id="lastName" name="lastName" placeholder="Doe" /> */}
        <input
          value={values.lastName}
          name="lastName"
          placeholder="Jane"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        {/* <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          /> */}
        <input
          value={values.email}
          name="email"
          placeholder="Jane"
          type={"email"}
          onChange={handleChange}
        />
        <br />
        <br />

        <span>Male</span>
        <input
          checked={values.gender === "male"}
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <span>Female</span>
        <input
          checked={values.gender === "female"}
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <br />
        <br />
        <div>
          Football
          <input
            type="checkbox"
            name="hobbies"
            value="Play Footbal"
            onChange={handleChange}
          />
        </div>
        <div>
          Photography
          <input
            type="checkbox"
            name="hobbies"
            value="Photography"
            onChange={handleChange}
          />
        </div>
        <div>
          Computer
          <input
            type="checkbox"
            name="hobbies"
            value="Play Computer"
            onChange={handleChange}
          />
        </div>
        <br />
        <br />

        <select name="country" value={values.country} onChange={handleChange}>
          <option value="Turkey">Türkiye</option>
          <option value="England">İngiltere</option>
          <option value="Usa">United States</option>
        </select>

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

export default App;

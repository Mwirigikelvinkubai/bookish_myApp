import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import getUsers from "../api/userAPI/getUsers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"


const LoginPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  //enable validation
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Password is required")
  })

  //use getUser helper function
  const handleLogin = async (values, {setSubmitting}) => {
    
    try {
      const user = await getUsers(values.username)

      if(!user) {
        alert("user not found")
        return
      }

      if(user.password === values.password) {
        setUser(user) //on context
        navigate("/")
      } else {
        alert("Invalid login details.")
      }

    } catch (err) {
      console.error("Error logging in:", err);
      alert("Login failed");
    } finally {
      setSubmitting(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>

      <p className="text-center text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  </div>
);
};

export default LoginPage;
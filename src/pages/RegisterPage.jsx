import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { useUser } from "../context/UserContext"; 
import addUser from "../api/userAPI/addUser";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {setUser} = useUser()
  const navigate = useNavigate()

  //creating validation scheme with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  const handleRegister = async (values, {setSubmitting}) => {
  
    try {
      const newUser = await addUser({...values, wishlist: []})

      setUser(newUser) //saving new user in context

      toast.success("Registration successful! Welcome 👋", {
        position: "top-center",
        autoClose: 3000,
      });

      navigate("/") //navigate user to home page
        } catch (err) {
          console.error("error registering user:", err)
          toast.error("Registration failed. Please try again.", {
            position: "top-center",
          });
        } finally {
          setSubmitting(false) //trigger formik to stop spinning
        }
  }; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white" >
      <h2 className="text-2xl mb-4">Register</h2>

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        
        <Form className="flex flex-col gap-4 w-full max-w-md">
          <div>
            <Field name="username" type="text" placeholder="Username" className="p-2 rounded w-full text-black" />
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" className="p-2 rounded w-full text-black" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" className="p-2 rounded w-full text-black" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="firstName" type="text" placeholder="First Name" className="p-2 rounded w-full text-black" />
            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
          </div>

          <div>
            <Field name="lastName" type="text" placeholder="Last Name" className="p-2 rounded w-full text-black" />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
import { Checkbox, Input } from "@headlessui/react";
import { Alert, Button, Card } from "flowbite-react";
import { Link, useNavigate, useOutletContext } from "react-router";
import { useCallback, useContext, useState } from "react";
import Body from "./Dashboard";

export const Login = () => {
  const navigate = useNavigate();
  const {setIsAuthenticated} = useOutletContext();

  function validation() {
    const data = JSON.parse(localStorage.getItem("user-info"));
  console.log(data)
    const email = document.getElementById("inp_email").value;
    const pass = document.getElementById("inp_pass").value;
    if (email && pass) {
      let obj = data.filter( (item) => item.email == email )
      console.log(obj)
      if (
        obj[0].email === document.getElementById("inp_email").value &&
        obj[0].password === document.getElementById("inp_pass").value
      ) {
        setIsAuthenticated(true);
        navigate("/Dashboard");
      } else {
        alert("Sorry!!! wrong Credentials");
      }
    } else {
      alert("Sorry!!! Please Enter the Credentials");
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-slate-300'>
      <Card className='w-3/12 p-4'>
        <p className='text-center font-bold'>Login In</p>
        <Input placeholder='Email' type='text' id='inp_email' />
        <Input placeholder='password' type='password' id='inp_pass' />
        <div className='flex justify-between'>
          <Link
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 inline-block'
            to={"/Signup"}>
            Sign up
          </Link>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 inline-block'
            type='submit'
            onClick={() => {
              validation();
            }}>
            Login
          </button>
        </div>
      </Card>
    </div>
  );
};

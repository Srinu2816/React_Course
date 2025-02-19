import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";

const schema = yup.object({
  fName: yup
    .string()
    .required("please provide first name")
    .min(3, "should be 3 chars minimum")
    .max(40, "40 chars maximum"),
  lName: yup
    .string()
    .required("please provide last name")
    .min(1, "should be 1 chars minimum")
    .max(40, "40 chars maximum"),
  email: yup.string().email().required("please provide email"),
  password: yup
    .string()
    .required("please provide password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Must contain at least one number and special character and one uppercase and lowercase letter, and at least 8 or more characters"
    ),
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    let arr = JSON.parse(localStorage.getItem("user-info")) || [];
    arr ? arr.push(data) : localStorage.setItem("user-info", JSON.stringify(data));
    localStorage.setItem("user-info", JSON.stringify(arr));
    toast("Account is Created Successfully !!!!");
    reset();
    navigate("/");
  };

  return (
    <div className='flex justify-center  p-3'>
      <Card className='w-3/12'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <h2 className='font-bold text-center m-2'>
              Please Register here !!!{" "}
            </h2>
            <label className=' font-semibold'>First Name </label>
            <TextInput
              className='py-4 flex-auto w-full'
              type='text'
              {...register("fName")}
            />
            <p>{errors.fName?.message}</p>
          </div>
          <div>
            <label className=' font-semibold'>Last Name</label>
            <TextInput
              className='py-4 flex-auto'
              type='text'
              {...register("lName")}
            />
            <p>{errors.lName?.message}</p>
          </div>
          <div>
            <label className=' font-semibold'>Email</label>
            <TextInput
              className='py-4 flex-auto'
              type='text'
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label className=' font-semibold'>Password </label>
            <TextInput
              className='py-4 flex-auto'
              type='password'
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className='flex justify-center m-2'>
            <Button type='submit'>Submit</Button>
          </div>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

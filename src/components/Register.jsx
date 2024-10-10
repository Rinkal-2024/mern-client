import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
    };
    
    await axios
        .post("http://localhost:5000/user/signup", userInfo)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                toast.success(res.data.message ,{
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                navigate(from, { replace: true });
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
        })
        .catch((err) => {
            if (err.response) {
                console.log(err);
                toast.error(
                  <div style={{ marginTop: "20px", borderRadius: "5px" }}> Error: {err.response.data.message}</div>
                   ,{
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                   })
            } else {
                toast.error("Something went wrong");
            }
        });
};

  return (
    <>
      <div className="flex mt-20 items-center justify-center">
        <div className="w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex  mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
               
              </div> 
              <p className="text-xl mt-3">
                  Have account?{" "}
                  <Link  className="underline text-blue-500 cursor-pointer" to= '/login'>Login</Link>

                  {/* <Login /> */}
                </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
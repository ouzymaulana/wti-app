import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });

    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formValue.name) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formValue.email)) newErrors.email = "Invalid email address";
    // if (formValue.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(formValue.password)) newErrors.password = "Password must be at least 8 characters";
    if (formValue.password !== formValue.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormValue({ name: "", email: "", password: "", confirmPassword: "" });
      setErrors({});

      Swal.fire({
        title: "Successfully Submitted Data!",
        icon: "success",
        confirmButtonColor: "#006BFF"
      });
    }
  };

  return (
    <>
      <div className='flex justify-center max-sm:mt-10'>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">FORM</h5>
          </div>
          <form className="flow-root" onSubmit={handleSubmit}>
            <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">Name <span className='text-red-600'>*</span></label>
                <input type="text" name="name" onChange={handleChange} value={formValue.name} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 ${errors.name && 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'}`}/>
                {errors.name && <small className="mt-2 text-red-600">{errors.name}</small>}
            </div>
            <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="text" name="email" onChange={handleChange} value={formValue.email} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.email && 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'}`}/>
                {errors.email && <small className="mt-2 text-red-600">{errors.email}</small>}
            </div>
            <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <div className='relative'>
                  <input type={isPasswordShow ? "text" : "password"} name="password" onChange={handleChange} value={formValue.password} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.password && 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'}`}/>
                  {!isPasswordShow ? (
                    <span className="material-icons absolute text-base right-4 top-1/4 cursor-pointer" onClick={() => setIsPasswordShow(!isPasswordShow)}>visibility</span>
                  ) : (
                    <span className="material-icons absolute text-base right-4 top-1/4 cursor-pointer" onClick={() => setIsPasswordShow(!isPasswordShow)}>visibility_off</span>
                  )}
                </div>
                {errors.password && <small className="mt-2 text-red-600">{errors.password}</small>}
            </div>
            <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} value={formValue.confirmPassword} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${errors.confirmPassword && 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500'}`}/>
                {errors.confirmPassword && <small className="mt-2 text-red-600">{errors.confirmPassword}</small>}
            </div>
            <div className="mt-4">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form

// /* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link,useNavigate} from 'react-router-dom'
// import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import axios from "axios";
import axiosRetry from "axios-retry";

function Signup() {

let navigate=useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [answer, setAnswer] = useState("");
    axiosRetry(axios, { retries: 3 });
    const handlesignup = async (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === ""|| answer==="") {
            return toast.error("All fields are required")
        }
        try {
          const res = await axios.post("https://back-6-2qac.onrender.com/api/register", {
            name,
            email,
            password,
            answer,
      
          },{ timeout: 10000});
          if (res.data.success) {
            navigate("/login");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      };

  



    return (
        <form onSubmit={handlesignup}>
        <div className=' flex justify-center items-center h-screen'>
            {/* {loading && <Loader/>} */}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>

                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='what is your nick name'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        // onSubmit={handlesignup}
                        
                        className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
      </form>
    )
}

export default Signup

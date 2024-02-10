import "./App.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from "react-router-dom"
const Signup = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        navigate('/login');
    }
    return (
        <div className="App">
            <header className="App-header">

                <form onSubmit={handleSubmit} class=" text-black p-8 flex flex-col gap-4 rounded-lg">

                    <h1 class=" text-white text-4xl">REGISTER</h1>

                    <input required value={inputs.name || ""} onChange={handleChange} name="name"
                        type="text"
                        class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                        placeholder="Full Name"
                    />

                    <input required value={inputs.mobile || ""} onChange={handleChange} name="mobile"
                        type="tel"
                        class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                        placeholder="Telephone"
                    />
                    <input required value={inputs.password || ""} onChange={handleChange} name="password" type="password" class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder='Password' />
                    <input type="submit" class="my-2 bg-blue-400 hover:bg-blue-500 p-4 rounded-md" />
                    
                </form>
                    <p class="text-sm">Already Registered? <Link to="/login" class="text-xl underline underline-offset-2">Login</Link></p>
            </header>
        </div>
    );
}
export default Signup

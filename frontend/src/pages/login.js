import "./App.css"
import { useState } from 'react';
const Login = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <form onSubmit={handleSubmit} class=" text-black p-8 flex flex-col gap-4 rounded-lg">




                    <input value={inputs.email || ""} onChange={handleChange} name="email"
                        type="email"
                        class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                        placeholder="Email"
                    />

                    <input value={inputs.password || ""} onChange={handleChange} name="password" type="password" class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500" placeholder='Password' />

                    <input type="submit" class="my-2 bg-blue-400 hover:bg-blue-500 p-4 rounded-md" />
                </form>
            </header>
        </div>
    );
}
export default Login

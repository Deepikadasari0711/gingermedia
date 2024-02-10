import "./App.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from "axios";
const Profile = () => {
    const [inputs, setInputs] = useState({});
    const [state, setState] = useState({})

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:6574/user/1234567890');
            setInputs(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const postData = async (inputs) => {
        try {
            const response = await axios.post('http://localhost:6574/update', inputs);
            console.log('Post request response:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        event.stopPropagation();
        setState({ disabled: true })
        // navigate('/login');
        const userData = {
            name: inputs.name,
            email:inputs.email,
            gender:inputs.gender,
            mobile:inputs.mobile,
            country:inputs.country,
            age:inputs.age

        };
        console.log(userData)
        postData(userData)
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">

                <form onLoad={() => { setState({ disabled: true }) }} onSubmit={handleSubmit} class=" text-black p-8 flex flex-col gap-4 rounded-lg">

                    <h1 class=" text-white text-4xl">Profile</h1>
                    <div><p class="text-left text-white">Name</p>
                        <input disabled={state.disabled} value={inputs.name || ""} onChange={handleChange} name="name"
                            type="text"
                            class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                            placeholder="Full Name"
                        /></div>

                    <div><p class="text-left text-white">Email</p>
                        <input disabled={state.disabled} value={inputs.email || ""} onChange={handleChange} name="email"
                            type="email"
                            class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                            placeholder="Email"
                        /></div>
                    <div><p class="text-left text-white">Mobile</p>
                        <input disabled={state.disabled} value={inputs.mobile || ""} onChange={handleChange} name="mobile"
                            type="tel"
                            class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                            placeholder="Telephone"
                        /></div>
                    <div><p class="text-left text-white">Country</p>
                        <input disabled={state.disabled} value={inputs.country || ""} onChange={handleChange} name="country"
                            type="text"
                            class=" p-4 border-2 border-blue-300 hover:border-blue-500 focus:border-blue-500"
                            placeholder="Country"
                        /></div>
                    <div class="flex gap-2 items-center" >
                        <p class="text-left mr-2 text-white">Gender</p>
                        <input disabled={state.disabled} checked={inputs.gender == "M" && inputs.gender != ""} onChange={handleChange} type="radio" id="M" name="gender" value="M" />
                        <label class="text-white" for="M">Male</label><br />
                        <input disabled={state.disabled} checked={inputs.gender == "F" && inputs.gender != ""} onChange={handleChange} type="radio" id="F" name="gender" value="F" />
                        <label class="text-white" for="F">Female</label>
                    </div>
                    <div class="flex gap-4">
                        <input value="Edit" type="button" onClick={() => { setState({ disabled: !state.disabled }) }} class="my-2  bg-blue-400 hover:bg-blue-500 p-4 rounded-md" />
                        <input disabled={state.disabled} value="Save" type="submit" class="my-2 bg-blue-400 hover:bg-blue-500 disabled:bg-gray-600 p-4 rounded-md" />
                    </div>
                </form>

            </header>
        </div>
    );
}
export default Profile

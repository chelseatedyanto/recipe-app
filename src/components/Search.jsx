import React, { useState } from "react";
import styled from "styled-components";
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';


function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    // Only the search area is reload (not the while page)
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }; 

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input 
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                value={input}
                />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0rem 0rem 3rem;
    div {
        position: relative;
        width: 100%;
        
    }
    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        font-size: 0.5rem;
        padding: 0.5rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search; 
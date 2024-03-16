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
    
    div {
        position: relative;
        width: 100%;
        
    input {
        width: 100%;
        border: 1.5px solid rgb(130,130,130,0.1);
        background: rgb(130,130,130,0.1);
        color: rgb(0, 0, 0,0.8);
        font-size: 0.6rem;
        padding: 0.4rem 2.2rem;
        border-radius: 1rem;
        outline: none;
        
    }
    svg {
        position: absolute;
        top: 50%;
        left: 1%;
        transform: translateY(-50%);
        color: rgb(0,0,0,0.3);
        padding: 0.1rem;
        font-size: 1rem;
        
        
    }
`

export default Search; 
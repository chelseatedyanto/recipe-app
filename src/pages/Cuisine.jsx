import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine =  async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`); 
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    },[params.type]);

    return (
        <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
            {cuisine.map((item)=> {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
};

const Grid = styled(motion.div)`
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    grid-gap: 1rem;
`;

const Card = styled.div`
    img {
        width:100%;
        border-radius:1rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
        font-size:0.7rem;
    }
    &:hover {
        img {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.6); 
            transform: scale(1.02); 
            transition: transform 0.2s ease-in-out, box-shadow 0.3s ease;
        }
    }
`;
    
export default Cuisine;
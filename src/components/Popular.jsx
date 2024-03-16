import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

function Popular() {
  localStorage.removeItem("popular");
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: true,
          drag: "free",
          gap: "2rem",
          
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipe/" + recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  
`;
const Card = styled.div`
  height:8rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: relative;
    left: 0;
    width: 150%; 
    height: auto; 
    object-fit: cover;
    
  }

  p {
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-weight: 600;
    font-size: 0.6rem;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 30%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%); 
    padding:0.8rem;
    width:100%;
    text-align:center;
  }
  &:hover {
        transform: scale(0.95); 
        transition: transform 0.2s ease;
}
`;



export default Popular;

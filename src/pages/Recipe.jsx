import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {

    const [details, setDetails] = useState({});
    let params = useParams();
    const [activeTab, setActiveTab] = useState("instructions");

    useEffect(() => {
        const fetchDetails = async () => {
            const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            const detailData = await data.json();
            setDetails(detailData);
        };

        fetchDetails();
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
                    Instructions
                </Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                </Button>
            </Info>
            <Info>
            {activeTab === 'instructions' && (
                    <div id="instruct">
                    <div className="instruction-wrapper">
                        <h5 dangerouslySetInnerHTML={{__html: details.summary}}></h5>
                        <h5 dangerouslySetInnerHTML={{__html: details.instructions}}></h5>
                    </div>
                </div>
                )}

                {activeTab === 'ingredients' && (
                    <ul>
                        {details.extendedIngredients && details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    flex-direction: column;
    text-align: center; 
    
    .active{
        background: rgb(0,0,0);
        color: white;
    }
    h2{
        margin-bottom: 1rem;
        font-size:1.2rem;
        color:rgb(36, 36, 36);
    }
    li{
        font-size: 0.8rem;
        line-height: 1.3rem;
        color:rgb(36, 36, 36);
    }
    ul{
        margin-top: 1rem;
        text-align: justify;
        width: 60%;
        color:rgb(36, 36, 36);
    }
    img{
        width: 70%; 
        height: auto; 
        margin-bottom: 1rem; 
        border-radius: 0.5rem;
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.8);
    }
    h5{
        font-size:0.8rem;
        font-weight:350;
        line-height:1.5rem;
        margin-top: 1rem;
        color:rgb(36, 36, 36);
    }
   
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
    font-weight: 600;
    font-size:0.5rem;
    display: flex;
    flex-direction: row;
`;
const Info = styled.div`
    align-items: center;
    display: flex; 
    justify-content: center;
    #instruct{
        width: 80%;
        text-align: justify;
    }
  
`;

export default Recipe;

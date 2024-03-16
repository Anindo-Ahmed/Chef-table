import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('fake-data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="lg:w-2/3 grid grid-cols-2 gap-6">

            {
                recipes.map(recipe => <Recipe recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;
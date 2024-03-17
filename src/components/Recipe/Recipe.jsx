import { IoMdStopwatch } from "react-icons/io";
import { SlFire } from "react-icons/sl";

const Recipe = ({recipe, handleAddToCook}) => {
    const {recipe_id, recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} = recipe
    return (
        <div className="border mt-12 gap-3 rounded-3xl">
            <div className="">
                <div className="rounded-3xl p-6">
                    <img src={recipe_image} alt="" className="mb-6 rounded-2xl"/>
                    <h3 className="text-xl font-semibold">{recipe_name}</h3>
                    <p className="my-4 fira-font font-normal text-[#878787]">{short_description}</p>
                    <hr className="my-5 w-2/3"/>
                    <h5 className="text-lg font-medium mb-4">Ingredients: {ingredients.length}</h5>
                    <div className="fira-font text-lg font-normal text-[#878787]">
                        {
                            ingredients.slice(0, 4).map((ingredient, idx) => <li key={idx} className="list-disc">{ingredient}</li>)
                        }
                    </div>
                    <hr className="my-5 w-2/3"/>
                    <div className="flex gap-4 mb-6">
                        <div className="flex justify-between gap-2">
                            <div><IoMdStopwatch className="w-6 h-6"/></div>
                            <p><span>{preparing_time}</span> minutes</p>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div><SlFire className="w-6 h-6"/></div>
                            <p><span>{calories}</span> calories</p>
                        </div> 
                    </div>
                    <button onClick={()=>handleAddToCook(recipe)} className="btn bg-[#0BE58A] border-0 text-black rounded-full">Want to Cook</button>
                </div>
                
            </div>
        </div>
    );
};

export default Recipe;
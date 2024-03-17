import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
// import toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  const [wantToCook, setWantToCook] = useState([]);
  const [cooking, setCooking] = useState([]);
  const [times, setTime] = useState(0);
  const [calories, setCalories] = useState(0);


  const handleAddToCook = recipe =>{
    const isExist = wantToCook.find((item) =>item.recipe_id == recipe.recipe_id);
    
    if(!isExist){
      const newWantToCook = [...wantToCook, recipe]
      setWantToCook(newWantToCook);
    }
    else{
      toast ('!! Already added to cook list');
    }
  }

  const handleCurrentCooking = (id) =>{
    const remaining = wantToCook.filter(item => item.recipe_id != id);
    setWantToCook(remaining)
  }

  const handleCooking = recipe =>{
    const isExist = cooking.find((recp) =>recp.recipe_id == recipe.recipe_id);
    if(!isExist){
      const newCooking = [...cooking, recipe];
      setCooking(newCooking);
    }
    else{
      toast ('!! Cooking Running');
    }

    // total time
    const newTime = (times + parseInt(recipe.preparing_time));
    setTime(newTime);

    // total calories
    const newCalories = (calories + parseInt(recipe.calories));
    setCalories(newCalories)
  }



  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className="mt-24 text-center">
            <h2 className="text-4xl mb-6">Our Recipes</h2>
            <p className="max-w-[800px] mx-auto">Want to start your day wih a taste of food? Learn how to cook breakfast, lunch or dinner! Discover the all required recipes with taste and benefits! </p>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-6'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <Sidebar 
        wantToCook={wantToCook}
        handleCurrentCooking={handleCurrentCooking}
        handleCooking={handleCooking}
        cooking={cooking}
        times={times}
        calories={calories}></Sidebar>
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default App

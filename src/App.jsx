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
    const remaining = wantToCook.filter(item => item.recipe_id != id)
    setWantToCook(remaining)
  }


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className="mt-24 text-center">
            <h2 className="text-4xl mb-6">Our Recipes</h2>
            <p className="max-w-[800px] mx-auto">Want to start your day wih a taste of food? Learn how to cook breakfast, lunch or dinner! Discover the all required recipes with taste and benifits! </p>
      </div>
      <div className='flex justify-between gap-6'>
        <Recipes handleAddToCook={handleAddToCook}></Recipes>
        <Sidebar 
        wantToCook={wantToCook}
        handleCurrentCooking={handleCurrentCooking}
        ></Sidebar>
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default App

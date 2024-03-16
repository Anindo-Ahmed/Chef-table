import './App.css'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
 

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className="mt-24 text-center">
            <h2 className="text-4xl mb-6">Our Recipes</h2>
            <p className="max-w-[800px] mx-auto">Want to start your day wih a taste of food? Learn how to cook breakfast, lunch or dinner! Discover the all required recipes with taste and benifits! </p>
      </div>
      <div className='flex justify-between gap-6'>
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </div>
      
      
    </div>
  )
}

export default App

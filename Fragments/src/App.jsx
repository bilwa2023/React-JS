  import './App.css'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  import  ErrorMessage  from './components/ErrorMessage';
  import { FoodItems } from './components/Fooditem';
function App() {
let healthyFoods=['Chawal','Dal','Roti','Tadka','Water','Banana'];

  // Conditional rendering type 1:
  /*if(healthyFoods.length===0){
    return <h2>Feeling hungry with 65 others</h2>
  }*/
  return (
    <>
    <h2>Healthy Foods</h2>
    {/* <ErrorMessage items={healthyFoods}/> */}
    <FoodItems items={healthyFoods}/>
    </>
    );
}

export default App

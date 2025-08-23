  import './App.css'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  // let healthyFoods=['Chawal','Dal','Roti','Tadka','Water','Banana'];
  let healthyFoods=[];

  // Conditional rendering type 1:
  /*if(healthyFoods.length===0){
    return <h2>Feeling hungry with 65 others</h2>
  }*/
  return (
    <>
    <h2>Healthy Foods</h2>
    {/*Conditional rendering type 2:*/}
    {/* {healthyFoods.length===0?<h2>Feeling hungry with 65 others</h2>:null}
     */}

    {/*Conditional rendering type 2:*/}
    {healthyFoods.length===0 && <h4>Feeling hungry with 65 others</h4>}

    {/*Map Function() to render from an array */}
  <ul className="list-group">
    
    {healthyFoods.map(item=><li key={item} className="list-group-item">{item}</li>)}
</ul>
    </>
    );
}

export default App

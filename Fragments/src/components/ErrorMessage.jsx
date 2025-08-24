const ErrorMessage=()=>{
    let healthyFoods=['Chawal','Dal','Roti','Tadka','Water','Banana'];    
    return (
    <>
        {/*Conditional rendering type 2:*/}
        {/* {healthyFoods.length===0?<h2>Feeling hungry with 65 others</h2>:null}
         */}

        {/*Conditional rendering type 2:*/}
        {healthyFoods.length === 0 && <h4>Feeling hungry with 65 others</h4>}
    </>
    );
}
export default ErrorMessage;
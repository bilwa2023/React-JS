const Item=(food)=>{
    return <>
    <li className="list-group-item">
            {food.name}{" : "}{food.calorie}
        </li>
    </>
}

export default Item;
import Item from "./Item";
export function FoodItems({items}) {
// let healthyFoods = [];
return (
    <>
    <ul className="list-group">
        {/*Map Function() to render from an array */}
        {items.map((item) => (
        <Item name={item} calorie={item.length} key={item}/>
        ))}
    </ul>
    </>
);
}

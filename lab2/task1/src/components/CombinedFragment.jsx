export default function CombinedFragment(){
    const items = ["Apple", "Banana", "Cherry"]
    return(
        <>
        <h2>Fruits List</h2>
        <ul>
            {items.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    <p> Total: {items.lenght} items</p>
        </>
    );
}
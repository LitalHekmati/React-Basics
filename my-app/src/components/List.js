import Item from "./Item"

function List(props) {
    return <div>
        <Item title={props.list[0].title} img={props.list[0].img} price={props.list[0].price} />

        <Item title={props.list[1].title} img={props.list[1].img} price={props.list[1].price} />

        <Item title={props.list[2].title} img={props.list[2].img} price={props.list[2].price} />
    </div>
        
    
}

export default List;




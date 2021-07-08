import './ListedItems.css'
import product0 from '../../assets/img/products/0.jpg'



const ListedItems = ( props ) => {
    return (
        <div className="product">
            <div className="product--wishlist"> <img src="" alt="" />  </div>
            <div className="product--image--placeholder"> <img className="product--image" src={product0} alt="foto-mate-primero-mate-luego-existo" /> </div>
            <div className="product--details">
            <h2 className="product--name"> Nombre del producto</h2>
            <h2 className="product--info"> Información del producto</h2>
            <div className="product--price"> $0</div>
            </div>
            <h2>{props.greetings}</h2>
        </div>

    )
}


export default ListedItems;
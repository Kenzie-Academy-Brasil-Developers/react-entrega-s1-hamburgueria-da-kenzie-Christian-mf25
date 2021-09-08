import Product from "../Product"
import "./style.css"

const MenuContainer = ({ products, handleClick }) => {

	return (
		<ul className="menuList">
			{products.map(item =>
				<Product
					id={item.id}
					name={item.name}
					category={item.category}
					price={item.price}
					handleClick={handleClick}
				/>)}
		</ul>
	)
}

export default MenuContainer
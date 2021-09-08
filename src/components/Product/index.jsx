import "./style.css"

const Product = ({ id, name, category, price, handleClick }) => {

	return (
		<>
			<li id="menuItem">
				<h3 className="menuName">{name}</h3>
				<p className="menuCategory">{category}</p>
				<p className="menuPrice">R$ {price}</p>

				<button
					type="button"
					className="menuButton"
					onClick={() => handleClick(id)}>
					Adicionar ao carrinho
				</button>
			</li>
		</>
	)
}

export default Product
import "./style.css"

const BuyCart = ({ currentSale }) => {

	let totalPrice = currentSale.map((item) => item.price)

	return (
		<>
			<h3 id="totalTitle">
				Total R$ {totalPrice.reduce((acc, item) => { return acc + item }, 0).toFixed(2)}
			</h3>
			<ul id="cartList">

				{currentSale.map((item, index) => (
					<li
						className="item"
						key={index}>
						<h3 className="menuName">{item.name}</h3>
						<p className="menuCategory">{item.category}</p>
						<p className="menuPrice">R$: {item.price}</p>
					</li>
				))}
			</ul>
		</>
	)
}

export default BuyCart
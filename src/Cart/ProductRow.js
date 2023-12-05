import "../styles/productrow.css";
import DecrementBtn from "../DecrementBtn";
import IncrementBtn from "../IncrementBtn";

const ProductRow = (props) => {
	return (
		<div className="product-row">
			<p className="product-item">Product: {props.product}</p>
			<p className="product-item">Price: ${props.price}</p>
			<div className="container product-quantity">
				<label htmlFor="quantity">
					Quantity:
					<input
						id="quantity"
						type="number"
						value={Number(props.quantity)}
						onChange={(e) => {
							const value = e.target.value;
							e.target.value = value.replace(/^0+/, "");
							props.handleInputChange(
								props.product,
								e.target.value
							);
						}}
						onBlur={(e) => {
							props.handleInputBlur(
								props.product,
								e.target.value
							);
						}}
					/>
				</label>
				<DecrementBtn
					handleDecrement={props.handleDecrement}
					product={props.product}
				/>
				<IncrementBtn
					handleIncrement={props.handleIncrement}
					product={props.product}
				/>
			</div>
		</div>
	);
};

export default ProductRow;

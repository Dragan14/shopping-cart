import "./styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems, handleCartClick }) => {
	const totalItems = cartItems.reduce((a, b) => {
		return a + b.quantity;
	}, 0);
	return (
		<header className="navbar">
			<Link to="/" className="logo-name">
				<img
					className="navbar-icon"
					src={require("./img/shopping-cart-logo.png")}
					alt="penguin"
				/>
				<h1 className="title">Animal Store</h1>
			</Link>
			<ul className="nav-links-list navbar-links">
				<li className="nav-link">
					{" "}
					<Link to="/shop">Shop</Link>{" "}
				</li>
				{cartItems.length >= 0 && (
					<div
						className="cart-icon-container"
						onClick={handleCartClick}
					>
						<li>
							<img
								className="cart-icon"
								src={require("./img/shopping-cart.png")}
								alt=""
							/>
						</li>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "absolute",
								height: "25px",
								width: "25px",
								top: "-10px",
								right: "-10px",
								borderRadius: "50%",
								border: "1px solid #000",
							}}
						>
							{totalItems}
						</div>
					</div>
				)}
			</ul>
		</header>
	);
};

export default Navbar;

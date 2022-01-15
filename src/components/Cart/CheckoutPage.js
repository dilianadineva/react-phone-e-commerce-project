import React, { PureComponent } from "react"
import "../../App.css"
import { ButtonContainer } from "../Button"

class CheckoutPage extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		console.log(this.props.location.state)
		return (
			<div>
				<h2>Checkout</h2>
				<div className="checkout-container">
					<div className="total-amount">
						Total amount: {this.props.location.state.totalAmount}{" "}
						{this.props.location.state.currency}
					</div>
					<div className="checkout-form">
						<div className="">
							<form action="">
								<p>Shipping details: </p>
								<label for="name">Name: </label>
								<input type="name" />
								<label for="phone">Phone: </label>
								<input type="phone" />
								<label for="email">E-mail: </label>
								<input type="email" />
								<label for="address1">Address 1:</label>
								<input type="address1" />
								<label for="address2">Address 2: (optional)</label>
								<input type="address2" />
								<ButtonContainer
									onClick={() => {
										alert("Your wallet is empty now. Thanks for shopping!")
										// this.props.location.state.clearCart()
										this.props.history.push("/")
									}}
									style={{ marginTop: "30px" }}
								>
									Order Products
								</ButtonContainer>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CheckoutPage

import React, { PureComponent } from "react"

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
				<div>
					Total amount: {this.props.location.state.totalAmount}{" "}
					{this.props.location.state.currency}
				</div>
				Blabla adresi za dostavka i pro4ie
			</div>
		)
	}
}

export default CheckoutPage

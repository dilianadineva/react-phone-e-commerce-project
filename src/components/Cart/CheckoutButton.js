import React from "react"
// import PaypalExpressBtn from "react-paypal-express-checkout"
// import CheckoutPage from "./CheckoutPage"

export default class MyApp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}
	render() {
		const gotoCheckout = (currency, totalAmount, clearCart) => {
			console.log("checkout")
			this.props.history.push("/checkout", { currency, totalAmount, clearCart })
		}

		// let env = "production" // you can set here to 'production' for production
		let currency = "USD" // or you can set this value from your props or state

		// const client = {
		// 	sandbox: process.env.REACT_APP_APP_ID,
		// 	production: "YOUR-PRODUCTION-APP-ID",
		// }
		return (
			<div>
				<button
					type="button"
					onClick={() => {
						gotoCheckout(currency, this.props.totalAmount)
					}}
				>
					Checkout
				</button>
			</div>
		)
	}
}

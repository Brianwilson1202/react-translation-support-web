import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux'
import * as actions from '../actions'
import '../css/header.css'

class Stripe extends React.Component{
    render(){
        return (
            <StripeCheckout
                name="Lang"
                description='$5 for 5 credits'
                amount={500}
                token={ token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
            <button id='charge' className='btn'>
                Add Credits
            </button>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions)(Stripe)
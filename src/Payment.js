import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./Payment.css";
import { useForm } from "react-hook-form";

function Payment() {

    const nrPattern = "/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/";
    const emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    const { register, errors, handleSubmit } = useForm();

    return(
        <div className="payment">
                <h1>Checkout</h1>
                <form className="payment-form">
                    <div className="input-group">
                        <div className="labels"><label htmlFor="name">Name*</label></div>
                        <input 
                            type="text"
                            name="name"
                            className="login-input"
                            placeholder="John Kowalsky"
                            required="true"
                            minLength="3"
                        />
                    </div>
                    <div className="input-group">
                        <div className="labels"><label htmlFor="address">Address*</label></div>
                        <input 
                            type="text"
                            name="address"
                            className="login-input"
                            placeholder="I"
                            required="true"
                        />
                    </div>
                    <div className="input-group">
                        <div className="labels"><label htmlFor="phone">Phone</label></div>
                        <input 
                            type="text"
                            name="phone"
                            className="login-input"
                            placeholder="+48"
                            pattern={nrPattern}
                            minLength="9"
                            maxLength="9"
                        />
                    </div>
                    <div className="input-group">
                        <div className="labels"><label htmlFor="email">E-mail</label></div>
                        <input 
                            name="email"
                            type="text"
                            required="true"
                            placeholder="money$wag@hot.com"
                            pattern={emailPattern}
                            title="E-mail should contain @"
                        />
                        {errors.email && errors.email.type === "invalid" && <span>Invalid e-mail</span>}
                    </div>
                    <div className="input-group buttons">
                        <Link to="/">
                            <button className="back-btn">
                                Go back
                            </button>
                        </Link>
                        <button className="btn-pay" onClick="false">Pay</button>
                    </div>
                </form>
        </div>
    );
}

export default Payment;
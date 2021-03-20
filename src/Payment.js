import React from "react"

function Payment() {
    return(
        <div className="payment">
            <h1>This is Payment Page</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="name">Name*</label>
                    <input 
                        type="text"
                        name="name"
                        className="login-input"
                        placeholder="John Kowalsky"
                        required="true"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address*</label>
                    <input 
                        type="text"
                        name="address"
                        className="login-input"
                        placeholder="I"
                        required="true"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text"
                        name="phone"
                        className="login-input"
                        placeholder="+48"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="text"
                        required="true"
                    />
                </div>
                <div className="input-group">
                    <button>Pay</button>
                </div>
            </form>
        </div>
    );
}

export default Payment;
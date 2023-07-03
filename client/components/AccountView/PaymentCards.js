const React = require("react");
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const PaymentCards = () => {
    const [name, setName] = useState();
    useEffect(() => {
        const getName = async () => {
            const { data } = await axios.get("/api/users/user");
            setName(data.name)
        };
        getName()
    }, []);

    return (
        <>
            <div class="container">
                <div class="row"></div>
                <div class="col-lg-4 mb-lg-0 mb-3">
                    <div class="card p-3">
                        <div class="img-box">
                            <img className="pokemonImg" src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="" />
                        </div>
                        <div class="number">
                            <label class="fw-bold" for="">**** **** **** 4358</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <small><span class="fw-bold">Expiry date:</span><span>10/24</span></small>
                            <small><span class="fw-bold">Name:</span><span>{name}</span></small>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-lg-0 mb-3">
                    <div class="card p-3">
                        <div class="img-box">
                            <img className="pokemonImg" src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                                alt="" />
                        </div>
                        <div class="number">
                            <label class="fw-bold">**** **** **** 2777</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <small><span class="fw-bold">Expiry date:</span><span>11/26</span></small>
                            <small><span class="fw-bold">Name:</span><span>{name}</span></small>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-lg-0 mb-3">
                    <div class="card p-3">
                        <div class="img-box">
                            <img className="pokemonImg" src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                                alt="" />
                        </div>
                        <div class="number">
                            <label class="fw-bold">**** **** **** 9599</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <small><span class="fw-bold">Expiry date:</span><span>03/24</span></small>
                            <small><span class="fw-bold">Name:</span><span>{name}</span></small>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};
export default PaymentCards;
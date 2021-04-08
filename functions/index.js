const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")('sk_test_51IWEfxJ85AZrdomRljUktfSwd8xFTaRYdaGTDs3kP2MVbemlATsmMMGGn67NbP5asIKCd4Q1rz4qHyDR7y1N9sf200FvpiPBW4')

//API config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send('hellow world !!!'))
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen commands
exports.api = functions.https.onRequest(app)




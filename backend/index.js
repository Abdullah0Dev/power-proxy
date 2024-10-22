require("dotenv").config();
const cors = require("cors");
const express = require("express");
// const morgan = require('morgan');
// const helmet = require('helmet');
// const CoinGate = require('coingate-v2');
// const mollieClient = require('@mollie/api-client')({
//   apiKey: process.env.MOLLIE_API_KEY
// });

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
// app.use(morgan('dev'));
// app.use(helmet());

// routes
// -> payments
// --> CoinGate Payment
// app.post('/create-coingate-payment', (req, res) => {
//     const client = new CoinGate.Client({ apiKey: process.env.COINGATE_API_KEY });

//     client.createOrder({
//       price_amount: req.body.amount,
//       price_currency: 'USD',
//       receive_currency: 'BTC',
//       callback_url: 'https://yourdomain.com/callback',
//       success_url: 'https://yourdomain.com/success'
//     }).then(response => res.json(response))
//       .catch(err => res.status(500).json(err));
//   });

//--> Mollie Payment
// app.post('/create-mollie-payment', async (req, res) => {
//   try {
//     const payment = await mollieClient.payments.create({
//       amount: { value: req.body.amount, currency: 'EUR' },
//       description: 'Product Purchase',
//       redirectUrl: 'https://yourdomain.com/return',
//       webhookUrl: 'https://yourdomain.com/webhook'
//     });
//   //   https://my.mollie.com/dashboard/

//     res.json(payment);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
app.get('/',(req, res) => res.send("It's the home pages") )
const PORT = process.env.PORT || 4000;

// run the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT} alhamdullah`)
);
// Molli@Pay4Proxies$$

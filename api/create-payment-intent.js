// api/create-payment-intent.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Ticket database (only amount needed for validation)
const ticketsDB = {
  "452304524": { total: 38840 }, // amount in cents
  "552304525": { total: 38840 },
  "652304526": { total: 38840 },
  "752304527": { total: 38840 },
  "852304528": { total: 38840 },
  "952304529": { total: 38840 },
  "352304528": { total: 38840 },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { ticketNumber } = req.body;
    const ticket = ticketsDB[ticketNumber];
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: ticket.total,
      currency: 'cad',
      metadata: { ticketNumber },
      automatic_payment_methods: { enabled: true },
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

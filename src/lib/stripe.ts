import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SCRECT_KEY, {
  apiVersion: '2024-11-20',
  appInfo: {
    name: 'Cold Shop',
  },
});

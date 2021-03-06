import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Quantity from "./quantity";
import Donate from "./donate";
import Checkout from "./checkout";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Index({ token }) {
  const classes = useStyles();
  const [stripe, setStripe] = useState(null);
  const items = useSelector((state) => state.items);

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(token));
    // eslint-disable-next-line
  }, [token]);

  function checkout() {
    const cartItems = items.filter((item) => {
      return item.quantity > 0;
    });

    stripe.redirectToCheckout({
      items: cartItems.map((item) => ({
        quantity: item.quantity,
        sku: item.sku,
      })),
      successUrl: "https://stripe-starter.now.sh/success",
      cancelUrl: "https://stripe-starter.now.sh/canceled",
    });
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        justify="center"
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <Donate />
        <Quantity />
        <Checkout checkout={checkout} />
      </Grid>
    </div>
  );
}

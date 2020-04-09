import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Chips from "./chips";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "45ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

// function formatPrice(price) {
//   return `$${(price * 0.01).toFixed(2)}`;
// }

// function totalPrice(items) {
//   return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
// }

export default function Checkout({ checkout }) {
  const classes = useStyles();
  return (
    <Grid item xs>
      {/* {checked.length > 0 ? ( */}
      <List className={classes.list}>
        <Divider variant="fullWidth" component="li" />
        <ListItem dense alignItems="flex-start">
          <Chips />
        </ListItem>
        <ListItem dense alignItems="flex-start">
          <ListItemText
            primary={`Donation Total: $25.00`}
            secondary={
              <React.Fragment>
                <br />
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Thank You!
                </Typography>
                {
                  " — If it weren't for people like you Musaeum would not be what it is today. Knowledge is for everyone this digital library will forever be free thanks to you!"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem dense alignItems="flex-start">
          <Button
            fullWidth
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin}
            onClick={checkout}
          >
            Checkout
          </Button>
        </ListItem>
      </List>
      {/* ) : null} */}
    </Grid>
  );
}

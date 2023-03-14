import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from './components/Posts/posts';
import Form from './components/Form/form';
import useStyles from './styles'

//Material UI is an open-source React component library that implements Google's Material Design.
//It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.

const App = () => {
    const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Kemal Burak Ecir
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

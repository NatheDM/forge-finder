import React from "react";
import { Jumbotron, Grid, Button } from "react-bootstrap";

const Home = props => (
  <Jumbotron>
    <Grid>
      <h1>Speak 'Friend', and No One Enters?</h1>
      <p>
        <ul>
          <li>Butts?</li>
          <li>More butts?</li>
          <li>Fewer butts?</li>
        </ul>
      </p>
      <p>ForgeFindr will help you find butts!</p>
      <p>
        <Button bsStyle="primary">Create a Profile</Button>
      </p>
    </Grid>
  </Jumbotron>
);

export default Home;

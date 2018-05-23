import React from "react";
import { Jumbotron, Grid, Button, Well } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Home = props => (
  <Jumbotron>
    <Grid>
      <h1>Speak 'Friend', and No One Enters?</h1>
      <Well>
        <ul>
          <li>Butts?</li>
          <li>More butts?</li>
          <li>Fewer butts?</li>
        </ul>
      </Well>
      <p>ForgeFindr will help you find butts!</p>
      <p>
        <LinkContainer to="/profile">
          <Button bsStyle="primary">Create a Profile</Button>
        </LinkContainer>
      </p>
    </Grid>
  </Jumbotron>
);

export default Home;

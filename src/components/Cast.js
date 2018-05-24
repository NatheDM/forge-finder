import React from "react";
import { Jumbotron, Grid, Panel, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Beard from "./Beard";

const mapStateToProps = state => ({
  dwarves: state.dwarves
});

const Cast = ({ dwarves }) => {
  return (
    <Jumbotron>
      <Grid>
        {!dwarves.length && <h3>No dwarves found</h3>}
        {dwarves.map(dwrf => (
          <Col sm={4}>
            <Panel>
              <Panel.Heading>
                <div>
                  <h4>
                    {dwrf._id}
                    <Beard height={20} color={dwrf.beardColor} />
                    {dwrf.name} {dwrf.clan},
                  </h4>
                  <h6>the {dwrf.occupation}</h6>
                </div>
              </Panel.Heading>
            </Panel>
          </Col>
        ))}
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps)(Cast);

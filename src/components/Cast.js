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
        {dwarves.map(dwrf => (
          <Col sm={4}>
            <Panel>
              <Panel.Heading>
                <div>
                  <h3>
                    <Beard height={20} color={dwrf.beardColor} />
                    {dwrf.name} {dwrf.clan},
                  </h3>
                  the {dwrf.occupation}
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

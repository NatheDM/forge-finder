import React from "react";
import {
  Jumbotron,
  Grid,
  Panel,
  Col,
  Button,
  Glyphicon
} from "react-bootstrap";
import { connect } from "react-redux";
import Beard from "./Beard.js";
import SearchFilter from "./SearchFilter.js";
import services from "../service.js";

const mapStateToProps = state => ({
  dwarves: state.dwarves,
  colorFilter: state.searchFilter
});

const mapDispatchToProps = dispatch => ({
  murderDwarf: id =>
    dispatch({
      type: "REMOVE_DWARF",
      payload: id
    }),
  getDwarves: payload => {
    services.dwarves.all().then(dwrf =>
      dispatch({
        type: "LOAD_DWARF",
        payload: dwrf
      })
    );
  }
});

const Cast = ({ dwarves, murderDwarf, getDwarves, colorFilter }) => {
  return (
    <Jumbotron>
      <Grid>
        <SearchFilter />
        {!dwarves.length && <h3>No dwarves found</h3>}
        {dwarves
          .filter(clr => {
            return colorFilter ? clr.beardColor === colorFilter : clr;
          })
          .map(dwrf => (
            <Col sm={4}>
              <Panel>
                <Panel.Heading>
                  <Panel.Title>
                    <Beard height={20} color={dwrf.beardColor} />
                    <Button
                      onClick={() => {
                        murderDwarf(dwrf._id);
                      }}
                      bsSize="xsmall"
                      bsStyle="danger"
                      className="pull-right"
                    >
                      <Glyphicon glyph="remove" />
                    </Button>
                    {dwrf.name} the {dwrf.occupation}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Clan {dwrf.clan}
                  <br />
                  Height: {dwrf.height}
                </Panel.Body>
              </Panel>
            </Col>
          ))}
      </Grid>
    </Jumbotron>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cast);

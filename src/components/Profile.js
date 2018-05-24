import React from "react";
import {
  Jumbotron,
  Grid,
  Form,
  FormGroup,
  Col,
  FormControl,
  ControlLabel,
  Radio,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Beard from "./Beard.js";

const mapStateToProps = state => ({
  clans: state.clans,
  occupations: state.occupations,
  beards: state.beards
});

const mapDispatchToProps = dispatch => ({
  addDwarf: dwrf =>
    dispatch({
      type: "ADD_DWARF",
      payload: dwrf
    })
});

const Profile = ({ addDwarf, history, clans, occupations, beards }) => {
  let name;
  let height;
  let clan;
  let occupation;
  let beardColor;

  let submitForm = event => {
    event.preventDefault();
    if (clan.value === "-1" || occupation.value === "-1") return;
    addDwarf({
      name: name.value,
      height: height.value,
      clan: clan.value,
      occupation: occupation.value,
      beardColor: beardColor
    });
    history.push("/cast");
  };

  return (
    <Jumbotron>
      <Grid>
        <Form horizontal onSubmit={event => submitForm(event)}>
          <FormGroup>
            <Col smOffset={2} sm={6}>
              <h3>Your Profile</h3>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Name
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  name = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Height
            </Col>
            <Col sm={6}>
              <FormControl
                type="text"
                required
                inputRef={ref => {
                  height = ref;
                }}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Clan
            </Col>
            <Col sm={6}>
              <FormControl
                componentClass="select"
                defaultValue={-1}
                inputRef={ref => {
                  clan = ref;
                }}
              >
                <option value={-1} disabled="disabled">
                  --select--
                </option>
                {clans.map(cln => (
                  <option key={cln.name} value={cln.name}>
                    {cln.cosmetic ? cln.cosmetic : cln.name}
                  </option>
                ))}
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Occupation
            </Col>
            <Col sm={6}>
              <FormControl
                componentClass="select"
                defaultValue={-1}
                inputRef={ref => {
                  occupation = ref;
                }}
              >
                <option value={-1} disabled="disabled">
                  --select--
                </option>
                {occupations.map(occ => (
                  <option key={occ.name} value={occ.name}>
                    {occ.cosmetic ? occ.cosmetic : occ.name}
                  </option>
                ))}
              </FormControl>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2} componentClass={ControlLabel}>
              Beard Color
            </Col>
            <Col sm={6}>
              {beards.map(brd => (
                <Radio
                  name="beardGroup"
                  inline
                  required
                  key={brd}
                  onChange={() => {
                    beardColor = brd;
                  }}
                >
                  <Beard height={35} color={brd} />
                </Radio>
              ))}
            </Col>
          </FormGroup>
          <Col smOffset={2} sm={6}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form>
      </Grid>
    </Jumbotron>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);

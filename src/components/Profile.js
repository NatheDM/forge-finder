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
import Beard from "./Beard.js";

const mapDispatchToProps = dispatch => ({
  addDwarf: dwrf =>
    dispatch({
      type: "ADD_DWARF",
      payload: dwrf
    })
});

const Profile = ({ addDwarf }) => {
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
  };

  let clans = [
    "Battlehammer",
    "Bouldershoulder",
    "Bronzebottom",
    "MacDumathoin",
    "McGuillicuddy",
    "Oakenshield",
    "... other"
  ];

  let occupations = [
    "Beard Stylist",
    "Brewer",
    "Miner",
    "Fighter",
    "Smith, Armor",
    "Smith, Black",
    "Smith, Gem",
    "Smith, Weapon",
    "... other"
  ];

  let beards = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "brown",
    "white",
    "grey",
    "black"
  ];

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
                {clans.map(cln => <option key={cln}>{cln}</option>)}
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
                {occupations.map(occ => <option key={occ}>{occ}</option>)}
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

export default connect(null, mapDispatchToProps)(Profile);

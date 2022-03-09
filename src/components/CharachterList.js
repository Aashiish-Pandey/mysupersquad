import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions/index";
class CharachterList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h4>CharachterList</h4>
        <ul>
          {this.props.charchters.map((charchter) => {
            return (
              <li key={charchter.id}>
                <div> {charchter.name}</div>
                <div onClick={() => this.props.addCharacterById(charchter.id)}>
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    charchters: state.characters,
  };
}

function mapdispatchToProps(dispatch) {
  return {
    addCharacterById: (id) => dispatch(addCharacterById(id)),
  };
}

export default connect(mapStateToProps, mapdispatchToProps)(CharachterList);

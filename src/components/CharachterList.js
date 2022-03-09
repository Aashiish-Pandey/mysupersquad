import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../actions/index";

class CharachterList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h4>CharachterList</h4>
        <ul className="List-group">
          {this.props.charchters.map((charchter) => {
            return (
              <li key={charchter.id} className ="List-group-item">
                <div className="List-item"> {charchter.name}</div>
                <div onClick={() => this.props.addCharacterById(charchter.id)} className="List-item">
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

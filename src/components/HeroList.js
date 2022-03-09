import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../actions/index";
class HeroList extends Component {
  render() {
    return (
      <div>
        <div style={{ color: "red" }}>HeroList</div>
        <ul>
          {" "}
          {this.props.heroList.map((hero) => {
            return (
              <li key={hero.id}>
                {hero.name}

                <div onClick={() => this.props.removeHero(hero.id)}>-</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroList: state.heroes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeHero: (id) => dispatch(removeCharacterById(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);

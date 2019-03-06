import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChar } from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChar();
  }

  render() {
    if (this.props.error) {
      // return something here to indicate that you are fetching data
      return <h1>{this.props.error}</h1>
    } else if ( this.props.fetching) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  fetching: state.charsReducer.fetching,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
});

export default connect(mapStateToProps,{getChar})(CharacterListView);

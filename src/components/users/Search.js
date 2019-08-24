//#region Imports 
import React, { Component } from 'react';
//#endregion /*

//#region Types 
type SearchState = {
  text: string
};

type TextChangeEvent = {|
  target: {|
    name: string,
    value: string
  |}
|};

type SearchProps = {|
  searchUsers: string => Promise<void>
|};

type SubmitEvent = {|
  preventDefault: () => void
|};
//#endregion 

export class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    text: ''
  };

  changeText = (e: TextChangeEvent) =>
    this.setState({ [e.target.name]: e.target.value });

  submitForm = (e: SubmitEvent) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.changeText}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;

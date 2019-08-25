//#region Imports 
import React, { Component } from 'react';
import type { Element } from 'react';
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
  searchUsers: string => Promise<void>,
  clearUsers: () => void,
  areUsersDisplayed: boolean,
  setAlert: (string, string) => void
|};

type SubmitEvent = {|
  preventDefault: () => void
|};
//#endregion 

export class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    text: ''
  };

  changeText = (e: TextChangeEvent): void =>
    this.setState({ [e.target.name]: e.target.value });

  submitForm = (e: SubmitEvent): void => {
    e.preventDefault();
    if(this.state.text === '')
    {
      this.props.setAlert('Please enter something', 'light');
    }
    else
    {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render(): Element<string> {
    const { areUsersDisplayed }: SearchProps = this.props;

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
        {areUsersDisplayed && 
          this.clearButton()}
      </div>
    );
  }

  clearButton = (): Element<string> =>
  {
    return (
      <button className="btn btn-light btn-block" 
        onClick={this.props.clearUsers}>Clear</button>
    )
  };
}

export default Search;

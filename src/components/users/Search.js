//#region Imports 
import React, { useState, useContext } from 'react';
import type { Element } from 'react';
import GithubContext from '../../context/github/githubContext';
//#endregion /*

import type { Context } from '../../context/github/githubContext';

//#region Types 
type TextChangeEvent = {|
  target: {|
    name: string,
    value: string
  |}
|};

type SearchProps = {|
  setAlert: (string, string) => void
|};

type SubmitEvent = {|
  preventDefault: () => void
|};
//#endregion 

const Search = ({ setAlert }: SearchProps) =>
{
  const { users, searchUsers, clearUsers }: Context = useContext(GithubContext);

  const [text, setText] = useState('');

  const changeText = (e: TextChangeEvent): void => setText(e.target.value);

  const submitForm = (e: SubmitEvent): void => {
    e.preventDefault();
    if(text === '')
    {
      setAlert('Please enter something', 'light');
    }
    else
    {
      searchUsers(text);
      setText('');
    }
  };

  const clearButton = (): Element<string> =>
  {
    return (
      <button className="btn btn-light btn-block" 
        onClick={clearUsers}>Clear</button>
    )
  };

  return (
    <div>
      <form onSubmit={submitForm} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={changeText}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && 
        clearButton()}
    </div>
  );
}

export default Search;

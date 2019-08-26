//#region Imports 
import React, { useState } from 'react';
import type { Element } from 'react';
//#endregion /*

//#region Types 
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

const Search = ({ searchUsers, clearUsers, areUsersDisplayed, setAlert }: SearchProps) =>
{
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
      {areUsersDisplayed && 
        clearButton()}
    </div>
  );
}

export default Search;

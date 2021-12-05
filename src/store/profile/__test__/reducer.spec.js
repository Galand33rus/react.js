import {changeName} from "../actions";
import {toggleCheckbox} from "../actions";
import {signIn} from "../actions";
import {signOut} from "../actions";
import {profileReducer} from "../reducer";

describe('testing profile reducer', () => {

  const initialState = {
    checkbox: false,
    name: 'User',
    authed: false,
  }

  it('toggle checkbox', () =>{
    const expected = {
      checkbox: true,
    };
    const received = profileReducer(initialState, toggleCheckbox);
    expect(received.checkbox).toEqual(expected.checkbox);
  });

  it('change name', () => {
    const expected = {
      name: 'Galand',
    };
    const received = profileReducer(initialState, changeName('Galand'));
    expect(received.name).toEqual(expected.name);
  });

  it('sign in', () => {
    const expected = {
      authed: true,
    };
    const received = profileReducer(initialState, signIn());
    expect(received.authed).toEqual(expected.authed);
  });

  it('sign out', () => {
    const expected = {
      authed: false,
    };
    const received = profileReducer(initialState, signOut());
    expect(received.authed).toEqual(expected.authed);
  });
});

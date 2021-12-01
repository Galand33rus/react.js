import configureStore from "redux-mock-store";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {Profile} from "../Profile";
import {changeName} from "../../../store/profile/actions";


describe('profile test', () => {

  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it("change name", () => {
    const initialState = {};
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Profile/>
      </Provider>
    );
    store.dispatch(changeName("Galand"));

    const expected = {
      payload: 'Galand',
      type: 'PROFILE::CHANGE_NAME',
    }
    const actions = store.getActions();

    expect(actions).toEqual([expected]);
  });
});



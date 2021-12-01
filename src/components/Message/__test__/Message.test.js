import {render} from "@testing-library/react";
import {Message} from "../Message";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";


describe("Message tests", () => {

  const middlewares = [];
  const initialState = {};
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  it("render author and text", () => {
    const message = render(<Provider store={store}>
      <Message messageList={[{text: "text", author: "author", id: 1}]}/>
    </Provider>);

    const msgText = message.getByText(": text");
    const authorText = message.getByText("author");

    expect(msgText).toBeInTheDocument();
    expect(authorText).toBeInTheDocument();
  });

  it("snapshot", () => {
    const message = render(<Provider store={store}>
      <Message messageList={[{text: "text", author: "author", id: 1}]}/>
    </Provider>);

    expect(message).toMatchSnapshot();
  });
});

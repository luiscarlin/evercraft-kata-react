import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it('has "Name" label', () => {
    const subject = shallow(<App />);
    expect(subject.find(".name label").text()).toEqual("Name");
  });

  it("allows user to set the name", () => {
    const subject = shallow(<App />);
    subject
      .find(".name input")
      .simulate("change", { target: { value: "luis" } });

    expect(subject.find("input").prop("value")).toEqual("luis");
  });

  it('has "Alignment" label', () => {
    const subject = shallow(<App />);
    expect(subject.find(".alignment label").text()).toEqual("Alignment");
  });

  it('has a select dropdown with options for "Good, Evil, and Neutral"', () => {
    const subject = shallow(<App />);

    const options = subject
      .find("select")
      .find("option")
      .map(item => item.text());

    expect(options).toHaveLength(3);
    expect(options).toEqual(["Good", "Neutral", "Evil"]);
  });
});

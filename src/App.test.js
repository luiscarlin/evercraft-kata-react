import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import { findNodeModule } from "jest-resolve";

describe("App", () => {
  it('has "Enter Name" label', () => {
    const subject = shallow(<App />);
    expect(subject.find(".name label").text()).toEqual("Enter Name");
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
});

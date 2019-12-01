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

  it("has a armor class field that default to 10", () => {
    const subject = shallow(<App />);

    const armorClass = subject.find(".armor-class");

    expect(armorClass.find("label").text()).toEqual("Armor Class");
    expect(armorClass.find("span").text()).toEqual("10");
  });

  it("has hit points field that default to 5", () => {
    const subject = shallow(<App />);

    const armorClass = subject.find(".hit-points");

    expect(armorClass.find("label").text()).toEqual("Hit Points");
    expect(armorClass.find("span").text()).toEqual("5");
  });

  it("has a roll button", () => {
    const subject = shallow(<App />);

    expect(subject.find("button").text()).toEqual("Roll");
  });
});

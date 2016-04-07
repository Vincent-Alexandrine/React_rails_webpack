"use strict";
const React = require("react");
const ReactDOM = require("react-dom");

const inputWithLabel = require('../components/FormInputWithLabel');
const fieldset = require('../components/fieldset');

var InputWithLabel = inputWithLabel({
  id: "oneLabel",
  placeholder: "here is an input",
  labelText: "deep fried chicken"
});

var oneFieldset = fieldset({text:"here is my legend"});



var formController = React.createClass({
  render() {
    var oneFs = fieldset({text:"here is the first fieldSet"});
    return oneFs;
  }
});

ReactDOM.render( React.createElement(formController), document.getElementById('renderer'));
//ReactDOM.render( oneFieldset, document.getElementById('renderer'));

// {Fieldset({text: "and then the second fieldset there. Yup"})}

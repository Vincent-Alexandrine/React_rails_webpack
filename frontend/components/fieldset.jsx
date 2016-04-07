const React = require('react');
const _ = require('underscore');
const DOM = React.DOM;

const inputWithLabel = require('../components/FormInputWithLabel');
const formData = [
  {
    id: "something",
    placeholder: "I placehold",
    labeltext: "it's just a reflektor",
    elementType: "input",
    inputType:"text",
    name: "Titel"
  },
  {
    id: "andSomethingElse",
    placeholder: "I placehold",
    labeltext: "it's just a reflektor",
    elementType: "input",
    inputType:"text",
    name: "Titel"
  }
];



var el = React.createClass({
  getDefaultProps() {
    return {
      text: "this is the defaultText"
    };
  },
  render() {
    var _data = formData;
    return (
      <fieldset>
        <legend>
          {this.props.text}
        </legend>
        {_data.map(function(object, i){
          object.key = i;
          var buff = inputWithLabel(object);
          console.log("here is the object", buff);
          return buff;
        })}
      </fieldset>
    );
  }
});

module.exports = React.createFactory(el);

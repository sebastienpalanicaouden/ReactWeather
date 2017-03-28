var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div className="text-center">
      <h1>About</h1>
      <p>Click <a href="https://github.com/sebastienpalanicaouden/ReactWeather">here</a> to see the source code of the application.</p>
    </div>
  );
};

module.exports = About;

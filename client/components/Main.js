import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">OlaVeagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;


// Video 2 : koden over
// Video X : koden under
// import React from 'react';
// import { Link } from 'react-router';

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>
//           <Link to="/">OlaVeagram</Link>
//         </h1>
//         {React.cloneElement(this.props.children, this.props)}
//       </div>
//     )
//   }
// });
// Video X : slutt Hold "cmd" nede klikk "k" og "u" så blir "//ene" borte 
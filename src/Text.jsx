import React from 'react';

function Text(props) {
    return (
        <h1>Hello, 
        <p style={{color: props.color}}>{props.children}</p>
    </h1>  
    )
}
// class Text extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         color: this.props.color
//       }
//     }
//     render() {
//       return (
//         <h1>Hello, 
//             <p style={{color:this.state.color}}>{this.props.children}</p>
//         </h1>
//       )
//     }
//   };

  export default Text
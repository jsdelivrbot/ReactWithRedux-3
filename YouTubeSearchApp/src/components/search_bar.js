import React, { Component } from 'react';

class SearchBar extends Component{
  constructor (props){
    super(props);

    this.state = {term : ' '};
  }
  render(){
    return (
      <div className="search-bar">
          <input
            value = {this.state.event}
            onChange={ event => this.onInputChange(event.target.value)}/>
      </div>
   );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;


// const SearchBar = () =>{
//   return <input/>
// }


//  class SearchBar extends Component{
//   constructor (props){
//     super(props);
//
//     this.state = {term : ' '};
//   }
//   render(){
//     return <input onChange={this.onInputChanged}/>;
//   }
//
//   onInputChanged(event){
//       console.log(event.target.value);
//   }
// }

import './App.css';
import { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title="web" sub="adad"></Subject>
        <Toc></Toc>
        <Content title="html" text="어쩌구저쩌구"></Content>
      </div>
    );
  }
}
class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
class Toc extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="">html</a></li>
          <li><a href="">css</a></li>
          <li><a href="">javascript</a></li>
        </ul>
      </nav>
    )
  }
}
class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.text}
      </article>
    )
  }
}
export default App;

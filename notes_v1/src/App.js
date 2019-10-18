import React ,{Component}from 'react';
import './App.css';
import Article from './Blog/Blog';
import Topic from './Blog/Topics';

class App extends Component {
  state = {
    articles:   [
      {'sentrope': 'some data'},
      {'Vasya': 'is good'},
      {'third': 'some explanation n22'}
    ],
    italic_name: 'Boris'
  }

  articleChanger = () => {
    this.setState({articles:[{'sentrope': 'some another data'}]});
  } 

  iChanger = (event) => {
    this.setState(
      {
        italic_name: event.target.value
      }
    )
  }

  render(){
    const style = {
      borderRadius: '5px',
      boxShadow: 'black 2px 3px 12px -1px',
      margin: ' 15px 50px',
    } 

    let articles = null;

    articles = (
      <div>
        {this.state.articles.map((article, index) =>{
          return(
            <Article>Click here</Article>
          )
        })}
      </div>
    )

    return(
      <div>
        <div style={style}>Hello there</div>
        {/* <Blog article_count="16">Now, let`s start</Blog> */}

        <button onClick={this.articleChanger}>Add one more article</button>
        <h2>Here will be the result</h2>
        <strong>{this.state.articles[0].sentrope}</strong>
      
        <Topic name={this.state.italic_name} changer={this.iChanger}/>
        <hr/>
        <div>{articles}</div>
      </div>

    );
  }
} 

export default App;

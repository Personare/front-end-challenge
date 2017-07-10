import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="face side1">
          <img src="http://www.adrianparr.com/images/card_back.png" />
        </div>
        <div className="face side2">
            <img src="https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano1.jpg" />
        </div>  
      </div>  
    );
  }
}

export default App;

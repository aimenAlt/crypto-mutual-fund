import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        investors: [],
        funds: [],
        cryptoList: [],
        ourCryptos: [],
    }
    this.getAll = this.getAll.bind();
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    Promise.all([
      axios.get('/investors'),
      axios.get('/funds')
    ]).then( data => {
      console.log(data);
    }).catch((err) => {
      console.log('something bad happened');
    })
  }

  render () {
    return(
      <div>
        Stuff
      </div>
    );
  }
}

export default App;
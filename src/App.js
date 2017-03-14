//
// Copyright (c) 2016 Satoshi Nakajima (https://github.com/snakajima)
// License: The MIT License
//

import React, { Component } from 'react';
import Mapbox from './Mapbox';

class App extends Component {
  render() {
      return (<div>
              <Mapbox>
                <p>Hello World</p>
              </Mapbox>
              </div>);
  }
}

export default App;

//
// Copyright (c) 2016 Satoshi Nakajima (https://github.com/snakajima)
// License: The MIT License
//

import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


class Mapbox extends Component {
    constructor(props) {
        super(props);
        mapboxgl.accessToken = 'pk.eyJ1Ijoic25ha2FqaW1hIiwiYSI6ImNqMGEwZ3BlNTBnYzUycXBkbnQyaGszd3kifQ.OspnfsEpf_U7vqCFQV9kIA';
    }
    
  componentDidMount() {
      this.map = new mapboxgl.Map({
                                 container: this.refs.map,
                                 style: 'mapbox://styles/mapbox/streets-v9'
                                 });
  }
  componentWillUnmount() {
        if (this.map) {
            this.map.remove();
        }
  }
  render() {
      return <div ref='map' style={{width:400, height:400, background:'#ff0'}}></div>;
  }
}

export default Mapbox;

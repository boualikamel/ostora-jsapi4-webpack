import './config';
import Map from "esri/Map";
import MapView from "esri/views/MapView";

import { Header } from './app/header';
import '../src/index.scss';
// import webpackgif from './assets/images/webpack.gif';

let header = new Header();
// document.getElementById('webpack-gif').setAttribute('src', webpackgif);
let firstHeading = header.getFirstHeading();
console.log(firstHeading)

var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [15, 65] // longitude, latitude
  });
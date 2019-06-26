import { Header } from './app/header';
import '../src/index.scss';
import webpackgif from './assets/images/webpack.gif';

let header = new Header();
document.getElementById('webpack-gif').setAttribute('src', webpackgif);
let firstHeading = header.getFirstHeading();
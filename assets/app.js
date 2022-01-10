/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// start the Stimulus application
import './bootstrap';

// police "montserra"
import "./fonts/montserrat/style.css";

// customisation de bootstrap (styles)
// "override the built-in custom variables."
import "./styles/custom.scss";

// import des scripts de bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js";

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';

// test for debug Webpack
console.log('Hello Webpack Encore! Edit me in assets/app.js');

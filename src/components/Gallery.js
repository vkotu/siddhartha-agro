import '../styles/gallery.scss';
import React from 'react';

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
      <ul>
        <li>
          <figure>
            <img src={require("../images/c1.jpg")}alt="ACaption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c2.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c3.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c4.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c5.jpg")} alt="Coconut creme pie."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c6.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c7.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c1.jpg")}alt="ACaption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c2.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c3.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c4.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c5.jpg")} alt="Coconut creme pie."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c6.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src={require("../images/c7.jpg")} alt="Caption goes here."/>
            <figcaption>Caption goes here</figcaption>
          </figure>
        </li>
      </ul>
      </div>
    )
  }
}

export default Gallery;
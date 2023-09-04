// Write your JS code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <Header />
        <div className="home-content-image-container">
          <div className="home-content-container">
            <h1 className="home-content-heading">
              Clothes That Get You Noticed
            </h1>
            <p className="home-content-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="shop-now-btn" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-clothes-get-you-noticed-image"
          />
        </div>
      </div>
    )
  }
}

export default Home

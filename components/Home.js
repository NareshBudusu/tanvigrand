
import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <div className="card text-bg-dark">
  <img src="https://img.pikbest.com/backgrounds/20220119/e-commerce-carnival-shopping-colorful-gradient-e-commerce-event-poster-background_6243918.jpg!sw800" height="700px" className="card-img" alt="..." />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <h5 className="card-title display-3 fw-bolder text-center">New Arrivals</h5>
    <p className="card-text display-3 text-center">Click to shop now</p>
  </div>
</div>
<Products />

    </div>
  )
}

export default Home;

import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
          <div className="home--container">
            <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />
             
            <div className="home--row">
            <Product 
                id="01"
                title="See U in C by Ali Karim Sayed (Author)"
                price={4450}
                image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                />
            <Product 
                id="02"
                title="
                Noise ColorFit Pro 2 Full Touch Control Smart Watch"
                price={2799}
                image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                />
            <Product 
                id="03"
                title="
                Apple iPhone 13 Mini (256GB) - Blue"
                price={79900.00}
                image="https://m.media-amazon.com/images/I/61iERbHlGPL._SL1500_.jpg"
                />
           
            </div>
            <div className="home--row">
            <Product 
                id="04"
                title="
               
2020 Apple MacBook Pro (13.3-inch/33.78 cm, 16GB RAM, 512GB SSD, 2.0GHz Quad-core 10th-Generation Intel Core i5 Processor, Four Thunderbolt 3..."
                price={79900.00}
                image="https://m.media-amazon.com/images/I/71HCR-N2O2L._SL1500_.jpg"
                />
            <Product 
                id="05"
                title="
                Sparx Men's Sd0323g Sneakers"
                price={599.00 }
                image="https://m.media-amazon.com/images/I/51P5FKI7i2L._UL1110_.jpg"
                />
            </div>
            <div className="home--row">
            <Product 
                id="06"
                title="
                OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
                price={15999}
                image="https://m.media-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg"
                />
            </div>

          </div>  
        </div>
    )
}

export default Home

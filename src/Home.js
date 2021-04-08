import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
                <div className="home_row">
                    <Product 
                        id = "111111"
                        title="MaoGoLan 47 Inch Giant Teddy Bears Big Cute Plush Teddy Bear Huge Life Size Teddy Bear Large" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                        rating={3}
                    />
                    <Product 
                        id = "222222"
                        title="Dolce & Gabbana Dolce & Gabbana By Dolce & Gabbana for Men 6.7 Oz Eau De Toilette Spray, 6.7 Oz" 
                        price={45.99}
                        image="https://m.media-amazon.com/images/I/81koT1MTLQL._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id = "333333"
                        title="Curve for Men Cologne Spray, Spicy Woody Magnetic Scent for Day or Night, 4.2 Ounce" 
                        price={39.99}
                        image="https://m.media-amazon.com/images/I/716QwlulSDL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id = "444444"
                        title="DOLCE GABBANA Intenso Eau De Parfum Spray for Men, 4.2 Fluid Ounce" 
                        price={60.99}
                        image="https://m.media-amazon.com/images/I/71AMm1m25WL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id = "555555"
                        title="The Dreamer by Versace for Men 3.4 oz Eau de Toilette Spray" 
                        price={40.99}
                        image="https://m.media-amazon.com/images/I/61LsPL7+kaL._AC_UL320_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id = "666666"
                        title="Cool Water By Davidoff For Men. Eau De Toilette Spray 4.2 Fl Oz (Pack of 1)" 
                        price={65.68}
                        image="https://m.media-amazon.com/images/I/715nM0dNJ4L._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

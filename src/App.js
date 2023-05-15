import React from 'react';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import './App.css';
import CustomButton from "./components/CustomButton";
import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {
    const handleButtonClick = (text) => {
        console.log(text);
    };

    return (
        <>
            <header>
                <h1>Handbags & Purses</h1>
            </header>
            <nav>
                <CustomButton text="to the collection" onClick={() => handleButtonClick("to the collection")}/>
                <CustomButton text="shop now" onClick={() => handleButtonClick("shop now")}/>
                <CustomButton text="pre-orders" onClick={() => handleButtonClick("pre-orders")} disabled/>
            </nav>

            <main>
                <article>
                    <Product
                    image={bag_1}
                    name="The handy bag"
                    price="€400"
                    description="Best Seller"
                    />
                </article>

                <article>
                    <Product
                        image={bag_2}
                        name="The stylish bag"
                        price="€250"
                        description="Best Seller"
                    />
                </article>

                <article>
                    <Product
                        image={bag_3}
                        name="The simple bag"
                        price="€300"
                        description="New collection"
                    />
                </article>

                <article>
                    <Product
                        image={bag_4}
                        name="The trendy bag"
                        price="€150"
                        description="New collection"
                    />
                </article>

            </main>
<footer>
    <section>
        <Tile
            title="the brand">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Tile>

    </section>
    <section>
        <Tile
            image={brand}
            />
    </section>

    <section>
        <Tile
            image={ourStory}
        />
    </section>
    <section>
        <Tile
            title="Our Story">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <p>sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </Tile>
    </section>

</footer>

        </>

    );
}

export default App;




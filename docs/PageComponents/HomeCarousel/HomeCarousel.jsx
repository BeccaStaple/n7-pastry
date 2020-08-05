import React from "react"
import Carousel from "react-bootstrap/Carousel"
import BlueberryCake from "./blueberry-cake.png"
import BlueberrySlice from "./blueberry-cake2.jpg"
import BrownCake from "./brown-cake.jpg"
import StrawberryCake from "./strawberry-cake.jpg"

export default function HomeCarousel() {
    return (
        <div className="carouselSpacing">
        <Carousel className="carouselDiv">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BlueberryCake}
                    alt="slice of cake"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BlueberrySlice}
                    alt="slice of blueberry cake"
                />

               
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BrownCake}
                    alt="brown cake"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={StrawberryCake}
                    alt="strawberry cake"
                />
            </Carousel.Item>
        </Carousel>

        </div>
    );
}
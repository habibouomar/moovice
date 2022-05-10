import React from 'react';
import { Carousel } from 'react-bootstrap';

export class DevChoice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://w0.peakpx.com/wallpaper/474/855/HD-wallpaper-dune-1-dune-2021-movies-movies-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://earth9dc.files.wordpress.com/2021/03/jlheader-1-1.png?w=800"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://pic.clubic.com/v1/images/1322161/raw.webp?&hash=400a5b83c7e4e2731f0f76c4bf6f88e1606859c3"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
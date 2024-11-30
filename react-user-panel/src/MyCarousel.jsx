import { Carousel, Container } from "react-bootstrap"
import nature1 from '../public/nature1.jpg'
import nature2 from '../public/nature2.jpg'
import nature3 from '../public/nature3.jpg'
function MyCarousel(){
    return(
        <Container fluid >
            <Carousel >
                <Carousel.Item>
                    <img src={nature1} className="d-block w-100"  ></img>
                    <Carousel.Caption>
                        <h3>First Slid</h3>
                        <p>Meri pahli image</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={nature2} className="d-block w-100" ></img>
                    <Carousel.Caption>
                        <h3>Second Slid</h3>
                        <p>Meri dusri image</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={nature3} className="d-block w-100" ></img>
                    <Carousel.Caption>
                        <h3>Third Slid</h3>
                        <p>Meri teesri image</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    )
}
export default MyCarousel
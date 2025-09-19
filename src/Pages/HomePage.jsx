import { Carousel, Container, Image } from "react-bootstrap";


function HomePage() {
  return (
    <div className="home-page-bg">

      <Container className="text-center mt-3">
        <h5>Bienvenidos a Huellitas</h5>
        <p>Uno de nuestros peluditos esta esperando por ti
          Animate a adoptar, nuestros perritos han sido rescatados de la calle porque los han abandonado o porque les han sido decomisados a sus dueños por malos tratos y malas condiciones de vida.
        </p>
      </Container>

      <Carousel className="text-center">
      <Carousel.Item>
        <Image src="https://plus.unsplash.com/premium_photo-1664285640375-3295cddb9e2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" alt="perrito" />
        <Carousel.Caption>
          <h3>Acogemos</h3>
          <p>Somos el hogar para más de 50 perros</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="https://plus.unsplash.com/premium_photo-1667563114945-91e146325eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="perrito1" />
        <Carousel.Caption>
          <h3>Cuidamos</h3>
          <p>Proporcionamos calidad de vida y cuidados.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="https://plus.unsplash.com/premium_photo-1695754439115-60e3807dbb26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="perrito2" />
        <Carousel.Caption>
          <h3>Rehabilitamos</h3>
          <p>Con muchos cuidados, intentamos que nuestros perritos sean felices.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    </div>
  );
}
export default HomePage;

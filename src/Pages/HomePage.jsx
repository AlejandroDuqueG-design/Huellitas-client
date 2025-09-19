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

      <Carousel className="text-center justify-center">
      <Carousel.Item>
        <Image src="https://plus.unsplash.com/premium_photo-1664285640375-3295cddb9e2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8" alt="perrito" style={{
      height: "auto",        // alto fijo
      width: "70%",          // ocupa todo el ancho del contenedor
      objectFit: "cover",     // recorta la imagen manteniendo proporciones
      maxHeight: "700px"
    }}/>
        <Carousel.Caption>
          <h3>Acogemos</h3>
          <p>Somos el hogar para más de 50 perros</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="perrito1" style={{
      height: "auto",        // alto fijo
      width: "70%",          // ocupa todo el ancho del contenedor
      objectFit: "cover",     // recorta la imagen manteniendo proporciones
      maxHeight: "700px"
    }} />
        <Carousel.Caption>
          <h3>Cuidamos</h3>
          <p>Proporcionamos calidad de vida y cuidados.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image src="https://plus.unsplash.com/premium_photo-1663127235137-dabe6e21bdfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8" alt="perrito2" style={{
      height: "auto",        // alto fijo
      width: "70%",          // ocupa todo el ancho del contenedor
      objectFit: "cover",     // recorta la imagen manteniendo proporciones
      maxHeight: "700px"
    }}/>
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

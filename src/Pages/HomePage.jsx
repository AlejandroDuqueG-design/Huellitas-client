import { Carousel, Container, Image } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Container className="text-center mt-5">
        <h2 className="fw-bold mb-3">🐾 Bienvenidos a Huellitas</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
          Uno de nuestros peluditos está esperando por ti. ¡Anímate a adoptar! Nuestros perritos han sido rescatados de la calle, algunos fueron
          abandonados y otros decomisados a sus dueños por maltrato y malas condiciones de vida.
        </p>
      </Container>

      <Carousel className="mt-4">
        <Carousel.Item>
          <Image
            src="https://plus.unsplash.com/premium_photo-1664285640375-3295cddb9e2b?w=800&auto=format&fit=crop&q=60"
            alt="perrito"
            className="d-block mx-auto rounded shadow"
            style={{ width: "100%", maxHeight: "600px", objectFit: "contain" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 d-inline-block mx-auto text-center" style={{ maxWidth: "400px" }}>
            <h3 className="fw-bold">Acogemos</h3>
            <p>Somos el hogar para más de 50 perros</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop"
            alt="perrito1"
            className="d-block mx-auto rounded shadow"
            style={{ width: "100%", maxHeight: "600px", objectFit: "contain" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 d-inline-block mx-auto text-center" style={{ maxWidth: "900px" }}>
            <h3 className="fw-bold">Cuidamos</h3>
            <p>Proporcionamos calidad de vida y cuidados</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://plus.unsplash.com/premium_photo-1663127235137-dabe6e21bdfb?w=800&auto=format&fit=crop&q=60"
            alt="perrito2"
            className="img-fluid rounded shadow mx-auto d-block"
            style={{ width: "100%", maxHeight: "600px", objectFit: "contain" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3 d-inline-block mx-auto text-center" style={{ maxWidth: "600px" }}>
            <h3 className="fw-bold">Rehabilitamos</h3>
            <p>Con muchos cuidados, buscamos que nuestros perritos sean felices</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HomePage;

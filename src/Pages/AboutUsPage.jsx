import { Carousel, Container, Image } from "react-bootstrap";

function AboutUsPage() {
  return (
    <div>
      <Container className="text-center mt-5">
        <h3 className="fw-bold"> 🐾 Sobre Nosotros</h3>

        <p className="mt-3 text-muted">
          Somos un refugio para perros fundado en 2021, este proyecto nace de la urgente necesidad que encontramos de dar un hogar a todos aquellos
          perritos que la gente adopto durante la pendemia para poder justificar salir a la calle a paserlos y que luego, una vez pasado todo el tema
          de las restricciones por el covid, fueron abandonados a sus suerte como cualquier objeto descartable.
        </p>
        <p className="mb-2 text-muted">
          Nos especializamos en la ayuda a perros abandonados y/o maltratados; somos una organización totalmente independiente que no recibe
          subvenciones de organismos oficiales, empresas ni partidos políticos. Practicamos el sacrificio cero, denunciamos judicialmente a los
          maltratadores y buscamos adoptantes para todos los animales que acogemos.
        </p>
        <Carousel className="text-center">
          <Carousel.Item>
            <Image
              src="https://media.istockphoto.com/id/2155998586/photo/people-volunteer-and-happy-with-dogs-at-park-for-walk-care-and-support-for-community-service.webp?a=1&b=1&s=612x612&w=0&k=20&c=dXM71oVHjSVa01xjBsiNAnhvia1HSTJ2hb1mM0QiGkA="
              alt="grupo"
            />
            <Carousel.Caption>
              <h3>Equipo</h3>
              <p>Somos un grupo unido</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src="https://media.istockphoto.com/id/2091556241/photo/close-up-of-female-volunteer-holds-on-hands-dog-in-shelter-shelter-for-animals-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ahIoGfAcj_sLgVxh9dCCxTQ6pjfJkg4j8SClu9knZs0="
              alt="señora"
            />
            <Carousel.Caption>
              <h3>Voluntarios</h3>
              <p>Voluntarios siempre dispuestos a ayudar</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              src="https://plus.unsplash.com/premium_photo-1679523690085-d29db6e9ff08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFuaW1hbCUyMHNoZWx0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="señor"
            />
            <Carousel.Caption>
              <h3>Personal Cualificado</h3>
              <p>Profesionales que trabajan con amor</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
export default AboutUsPage;

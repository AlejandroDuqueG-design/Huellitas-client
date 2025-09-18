import { Container } from "react-bootstrap";

function AboutUsPage() {
  return (
    <div>
      <Container className="text-center mt-5">
        <h5>Sobre Nosotros</h5>

        <p className="mt-2">
          Somos un refugio para perros fundado en 2021, este proyecto nace de la urgente necesidad que encontramos de dar un hogar a todos aquellos
          perritos que la gente adopto durante la pendemia para poder justificar salir a la calle a paserlos y que luego, una vez pasado todo el tema
          de las restricciones por el covid, fueron abandonados a sus suerte como cualquier objeto descartable.
        </p>
        <p>
          Nos especializamos en la ayuda a perros abandonados y/o maltratados; somos una organización totalmente independiente que no recibe subvenciones de organismos oficiales, empresas ni partidos políticos. 
          Practicamos el sacrificio cero, denunciamos judicialmente a los maltratadores y buscamos adoptantes para todos los animales que acogemos.
        </p>
      </Container>
    </div>
  );
}
export default AboutUsPage;

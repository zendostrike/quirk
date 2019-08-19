import MainLayout from "../src/layouts/main";
import { WeekPlayer, NewsBox } from "../src/components";

const Home = () => (
  <MainLayout>
    <section>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <WeekPlayer title="Jugador de la semana" />
        <div>
          <h3>Actividad</h3>
          <NewsBox title="Vota al jugador de la semana" />
          <NewsBox title="Vota al team de la semana" />
          <NewsBox title="Predicciones" />
        </div>
      </div>
    </section>
    <section>asd</section>
  </MainLayout>
);

export default Home;

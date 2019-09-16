import MainLayout from '../src/layouts/main'
import { NewsBox, Button } from '@components'

const Home = () => (
  <MainLayout>
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>Actividad</h3>
          <NewsBox title='Vota al jugador de la semana' />
          <NewsBox title='Vota al team de la semana' />
          <NewsBox title='Predicciones' />
          <Button text='Ask here' />
        </div>
      </div>
    </section>
    <section>asd</section>
  </MainLayout>
)

export default Home

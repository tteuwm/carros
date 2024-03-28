import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App(){
  return(
    <main>
      <section>
        <div className="bg-orange">
          <img src ={iconSedans} alt="icone dos carros sedans" />
          <h2>Sedans</h2>
          <p>texto sedans, nao to conseguindo copiar</p>
          <a href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
         
         <div className="bg-green">
          <img src={iconsSuvs} alt="Icone dos suvs" />
          <h2>SUVs</h2>
          <p>Texto suvs</p>
          <a href="https://www.webmotors.com.br/suvs"target="_blank">Ver mais</a>
         </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="icone dos carros de luxo" />
          <h2>Luxuosos</h2>
          <p>texto do Luxuosos</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo"target="_blank">ver mais</a>
        </div>
      </section>
    </main>
  )
}
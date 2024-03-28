import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 ">
      <section>
        <div className="bg-orange">
          <img src ={iconSedans} alt="icone dos carros sedans" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">texto sedans, nao to conseguindo copiar</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
         
         <div className="bg-green p-12">
          <img src={iconsSuvs} alt="Icone dos suvs" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Texto suvs</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/suvs"target="_blank">Ver mais</a>
         </div>

        <div className="bg-dark-green p-12">
          <img src={iconLuxury} alt="icone dos carros de luxo" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">texto do Luxuosos</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo"target="_blank">ver mais</a>
        </div>
      </section>
    </main>
  )
}
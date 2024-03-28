import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6  ">
      <section>
        <div className="bg-orange rounded-t-lg">
          <img src ={iconSedans} alt="icone dos carros sedans" className="nb-7" />
          <h2 className="font-shoulders nb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend nb-7">texto sedans, nao to conseguindo copiar</p>
          <a className="font-lexend nb-7" href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
         
         <div className="bg-green p-12">
          <img src={iconsSuvs} alt="Icone dos suvs" className="nb-7"/>
          <h2 className="font-shoulders nb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend nb-7">Texto suvs</p>
          <a className="font-lexend nb-7" href="https://www.webmotors.com.br/suvs"target="_blank">Ver mais</a>
         </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
          <img src={iconLuxury} alt="icone dos carros de luxo " className="nb-7" />
          <h2 className="font-shoulders nb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend nb-7">texto do Luxuosos</p>
          <a className="font-lexend nb-7" href="https://www.webmotors.com.br/carros-de-luxo"target="_blank">ver mais</a>
        </div>
      </section>
    </main>
  )
}
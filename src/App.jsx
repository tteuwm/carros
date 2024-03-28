import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App(){
  return(
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center intems-center ">
      <section className="lg:flex max-w-[920px]">
        <div className="bg-orange max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src ={iconSedans} alt="icone dos carros sedans" className="nb-7" />
          <h2 className="font-shoulders nb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend nb-7 text-offwhite lg:mb-20">texto sedans, nao to conseguindo copiar</p>
          <a className="font-lexend nb-7 text-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange border-2 border-offwhitebg hover:bg-orange hover:text-offwhitebg " href="https://www.webmotors.com.br/sedans" target="_blank">Ver mais</a>
        </div>
         
         <div className="bg-green p-12">
          <img src={iconsSuvs} alt="Icone dos suvs" className="nb-7"/>
          <h2 className="font-shoulders nb-7 uppercase text-4xl font-bold text-offwhitebg">SUVs</h2>
          <p className="font-lexend nb-7 text-offwhite lg:mb-20">Texto suvs</p>
          <a className="font-lexend nb-7 text-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg " href="https://www.webmotors.com.br/suvs"target="_blank">Ver mais</a>
         </div>

        <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="icone dos carros de luxo " className="nb-7" />
          <h2 className="font-shoulders nb-7 uppercase text-4xl font-bold text-offwhitebg">Luxuosos</h2>
          <p className="font-lexend nb-7 text-offwhite lg:mb-20">texto do Luxuosos</p>
          <a className="font-lexend nb-7 text-offwhitebg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg " href="https://www.webmotors.com.br/carros-de-luxo"target="_blank">ver mais</a>
        </div>
      </section>
    </main>
  )
}
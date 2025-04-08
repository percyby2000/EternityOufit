// pages/index.js
import ImageSlider from "@/components/inicio/Slider";
import ColeccionInicio from "@/components/inicio/ColeccionInicio";
import { sliderData } from "@/service/data";
import { coleccionInicioData } from "@/service/data";
import ColeccionVerano from "@/components/inicio/ColeccionVerano";
import Comentarios from "@/components/inicio/Comentarios";

export default function Home() {
  return (
    <main>
      <ImageSlider slides={sliderData} />
      <ColeccionInicio  data={coleccionInicioData}/>
      <ColeccionVerano/>
      <Comentarios/>
    </main>
  );
}
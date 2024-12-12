import { HomeContainer, Product } from "@/styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import 'keen-slider/keen-slider.min.css';

import camisa1 from '../assets/psg.webp';
import camisa2 from '../assets/ceara.webp';
import camisa3 from '../assets/corinthians.png';

export default function Home() {
  const [sliderRaf] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRaf} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Psg</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Ceara</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa Corinthains</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa camisa </strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
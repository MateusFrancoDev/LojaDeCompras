import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import camisa1 from '../assets/camisa1.png';
import camisa2 from '../assets/camisa1.png';
import camisa3 from '../assets/camisa1.png';


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa XX</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa XX</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
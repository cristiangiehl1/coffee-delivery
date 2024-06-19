import { FaShoppingCart } from 'react-icons/fa';
import { PiTimerFill } from 'react-icons/pi';
import { BiSolidPackage } from 'react-icons/bi';
import { GiCoffeeCup } from 'react-icons/gi';

import { menu } from '../../database'
import { Header } from '../../components/Header';
import { Product } from '../../components/Product';
import homeImg from '../../assets/home_img.png'

import { 
  HomeContainer, 
  ProductBenefits, 
  ProductBenefitsWrapper, 
  ProductsList 
} from './styles'


const homeSvgSize = 16;

export function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <div className="homePageIntro">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <ProductBenefitsWrapper>
              <ProductBenefits $iconbgcolor="yellowDark">
                <div>
                  <FaShoppingCart size={homeSvgSize}/>
                </div>
                <span>Compra simples e segura</span>
              </ProductBenefits>
              <ProductBenefits $iconbgcolor="yellow">
                <div>
                  <BiSolidPackage size={homeSvgSize}/>
                </div>
                <span>Embalagem mantém o café intacto</span>
              </ProductBenefits>
              <ProductBenefits $iconbgcolor="gray">
                <div >
                  <PiTimerFill  size={homeSvgSize}/>
                </div>
                <span>Entrega rápida e rastreada</span>
              </ProductBenefits>
              <ProductBenefits $iconbgcolor="purple">
                <div>
                  <GiCoffeeCup  size={homeSvgSize}/>
                </div>
                <span>O café chega fresquinho até você</span>
              </ProductBenefits>
            </ProductBenefitsWrapper>
          </div>
            <img src={homeImg} alt="" />
        </div>
        <div className='productsMenu'>
          <h2>Nossos Cafés</h2>
          <ProductsList>            
            {
              menu.map((coffee, index) => {
                return <Product key={index} product={coffee}/>
              })
            }        
          </ProductsList>
        </div>

      </HomeContainer>
    </div>
  )
}


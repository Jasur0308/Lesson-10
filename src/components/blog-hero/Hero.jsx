import './Hero.css'
import hero from '../../images/hero.svg'
import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin-hero.svg'
import medium from '../../images/medium.svg'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='max-w[1920px] my-0 mx-[auto] mt-[87px]'>
      <div className="container">
        <div className="hero__wrapper flex justify-between items-center">
          <div className="hero__content flex flex-col gap-[36px]">
            <div className="hero__title flex flex-col gap-[12px]">
              <h3 className='hero__title red'>{t("hero-h1-1")}</h3>
              <h3 className='hero__title'>{t("hero-h1-2")}</h3>
            </div>
            <p className='hero__description max-w-[631px] w-full'>
              {t("hero-p")}
            </p>
            <div className="hero__links flex gap-[18px]">
              <a className='hero__link max-w-[201px] w-full h-[60px] twitter flex items-center justify-center gap-[30px]' href="#">
                <img src={twitter} alt="" />
                <span className='hero__link__span'>twitter</span>
              </a>
              <a className='hero__link max-w-[201px] w-full h-[60px] linkedin flex items-center justify-center gap-[30px]' href="#">
                <img src={linkedin} alt="" />
                <span className='hero__link__span'>linkedin</span>
              </a>
              <a className='hero__link max-w-[201px] w-full h-[60px] medium flex items-center justify-center gap-[30px]' href="#">
                <img src={medium} alt="" />
                <span className='hero__link__span'>medium</span>
              </a>
            </div>
          </div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
import './Cards.css'
import card1 from '../../images/card-1.png'
import card2 from '../../images/card-2.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Cards = () => {
  const [t] = useTranslation();
  return (
    <div className='max-w-[1920px] mx-[auto] my-0 mt-[312px]'>
      <div className="container">
        <div className="cards__wrapper">
          <ul className="cards__links flex gap-[52px]">
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav1")}</a>
            </li>
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav2")}</a>
            </li>
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav3")}</a>
            </li>
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav4")}</a>
            </li>
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav5")}</a>
            </li>
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav6")}</a>
            </li>
            <li className="cards__link__list">
              <a href="#" className="cards__link__item">{t("cards-nav7")}</a>
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-[20px] mt-[124px]">
            <div className="max-w-[590px] w-full h-[618px]">
              <img src={card1} alt="" className="card__image-left" />
              <span className='date block mt-[16px]'>{t("cards-date")}</span>
              <h3 className='card__title mt-[14px]'>{t("cards-h3")}</h3>
              <p className='card__description mt-[12px] mb-[30px]'>
                {t("cards-p")}
              </p>
              <Link to={'/post'} className='card__link' href="#">{t("cards-link")}</Link>
            </div>
            <div className="max-w-[590px] w-full h-[618px]">
              <img src={card2} alt="" className="card__image-right" />
              <span className='date block mt-[16px]'>{t("cards-date")}</span>
              <h3 className='card__title mt-[14px]'>{t("cards-h3")}</h3>
              <p className='card__description mt-[12px] mb-[30px]'>
                {t("cards-p")}
              </p>
              <Link to={'/post'} className='card__link' href="#">{t("cards-link")}</Link>
            </div>
            <div className="max-w-[590px] w-full h-[618px]">
              <img src={card1} alt="" className="card__image-left" />
              <span className='date block mt-[16px]'>{t("cards-date")}</span>
              <h3 className='card__title mt-[14px]'>{t("cards-h3")}</h3>
              <p className='card__description mt-[12px] mb-[30px]'>
                {t("cards-p")}
              </p>
              <Link to={'/post'} className='card__link' href="#">{t("cards-link")}</Link>
            </div>
            <div className="max-w-[590px] w-full h-[618px]">
              <img src={card2} alt="" className="card__image-right" />
              <span className='date block mt-[16px]'>{t("cards-date")}</span>
              <h3 className='card__title mt-[14px]'>{t("cards-h3")}</h3>
              <p className='card__description mt-[12px] mb-[30px]'>
                {t("cards-p")}
              </p>
              <Link to={'/post'} className='card__link' href="#">{t("cards-link")}</Link>
            </div>
            <div className="max-w-[590px] w-full h-[618px]">
              <img src={card1} alt="" className="card__image-left" />
              <span className='date block mt-[16px]'>{t("cards-date")}</span>
              <h3 className='card__title mt-[14px]'>{t("cards-h3")}</h3>
              <p className='card__description mt-[12px] mb-[30px]'>
                {t("cards-p")}
              </p>
              <Link to={'/post'} className='card__link' href="#">{t("cards-link")}</Link>
            </div>
            <div className="max-w-[590px] w-full h-[618px]">
              <img src={card2} alt="" className="card__image-right" />
              <span className='date block mt-[16px]'>{t("cards-date")}</span>
              <h3 className='card__title mt-[14px]'>{t("cards-h3")}</h3>
              <p className='card__description mt-[12px] mb-[30px]'>
                {t("cards-p")}
              </p>
              <Link to={'/post'} className='card__link' href="#">{t("cards-link")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
import './Navbar.css'
import logo from '../../images/logo.svg'
import linkedin from '../../images/linkedin.svg'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [t, i18n] = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className='navbar w-full my-0 mx-auto mt-[66px] py-[22px]'>
      <div className="container">
        <div className="navbar__wrapper flex justify-between">
          <div className="navbar__left flex gap-[12px] items-center">
            <img src={logo} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <div className="navbar__right flex items-center gap-[18px]">
            <select className='min-w-[44px] h-[27px]' onChange={handleChangeLanguage} defaultValue={i18n.language}>
              <option className='selection' value="en">EN</option>
              <option className='selection' value="ru">RU</option>
              <option className='selection' value="uz">UZ</option>
            </select>
            <ul className='navbar__list flex gap-[30px] items-center'>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav1")}</a>
              </li>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav2")}</a>
              </li>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav3")}</a>
              </li>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav4")}</a>
              </li>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav5")}</a>
              </li>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav6")}</a>
              </li>
              <li className='navbar__list__item'>
                <a className='navbar__link' href="#">{t("nav7")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import './Posts.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import post from '../../images/post.png'
import { useTranslation } from 'react-i18next'

const Posts = () => {
  const [t] = useTranslation();

  return (
    <>
      <Navbar/>
      <div className=' max-w-[1920px] post__hero mx-auto mt-[113px]'>
        <div className="container">
          <div className="post__wrapper">
            <img src={post} alt="Post__image" classNamepost__image />
            <div className="post__content mt-[177px]">
              <h1 className='post__title'>{t("post-h")} h1</h1>
              <p className="post__description">
                <span>
                  {t("post-span1")}
                </span>

                <span>
                  {t("post-span2")}
                </span>

                <span>
                  {t("post-span2")}
                </span>
              </p>
              <h2 className='post__title mt-[186px] text-[36px]'>{t("post-h")} h2</h2>
              <p className="post__description">
              <span>
                  {t("post-span1")}
                </span>

                <span>
                  {t("post-span2")}
                </span>

                <span>
                  {t("post-span2")}
                </span>
              </p>
              <h3 className='post__title mt-[174px] text-[24px]'>{t("post-h")} h3</h3>
              <p className="post__description">
              <span>
                  {t("post-span1")}
                </span>

                <span>
                  {t("post-span2")}
                </span>

                <span>
                  {t("post-span2")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Posts
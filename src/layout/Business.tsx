// import { IconSelector } from '../helpers/icon-selector';
import s from '../styles/layout/business.module.scss';
import image1_JP from '../images/cases/cases1.jpg';
import image1_JP_2x from '../images/cases/cases1@2x.jpg';
import image1_Webp from '../images/cases/cases1.webp';
import image1_JWebp_2x from '../images/cases/cases1@2x.webp';

import image2_JP from '../images/cases/cases2.jpg';
import image2_JP_2x from '../images/cases/cases2@2x.jpg';
import image2_Webp from '../images/cases/cases2.webp';
import image2_JWebp_2x from '../images/cases/cases2@2x.webp';

import image3_JP from '../images/cases/cases3.jpg';
import image3_JP_2x from '../images/cases/cases3@2x.jpg';
import image3_Webp from '../images/cases/cases3.webp';
import image3_JWebp_2x from '../images/cases/cases3@2x.webp';

import image4_JP from '../images/cases/cases4.jpg';
import image4_JP_2x from '../images/cases/cases4@2x.jpg';
import image4_Webp from '../images/cases/cases4.webp';
import image4_JWebp_2x from '../images/cases/cases4@2x.webp';

import image5_JP from '../images/cases/cases5.jpg';
import image5_JP_2x from '../images/cases/cases5@2x.jpg';
import image5_Webp from '../images/cases/cases5.webp';
import image5_JWebp_2x from '../images/cases/cases5@2x.webp';

import image6_JP from '../images/cases/cases6.jpg';
import image6_JP_2x from '../images/cases/cases6@2x.jpg';
import image6_Webp from '../images/cases/cases6.webp';
import image6_JWebp_2x from '../images/cases/cases6@2x.webp';

export default function Business(): JSX.Element {
  return (
    <section>
      <div id="cases" className={s.business}>
        <div className={s.business_text}>
          <p>This is what we do</p>
          <h3 className={s.business_heading}>Business Cases</h3>
          <p className={s.business_text_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>

        <div className={s.business_gallery}>
          <a
            className="example-image-link"
            href={image1_JP_2x}
            data-lightbox="example-set"
            data-title="First image"
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${image1_Webp} 1x, 
                ${image1_JWebp_2x} 2x`}
              />

              <img
                sizes="(min-width: 768px) 220px,
              (min-width: 1360px) 240px,
         280px"
                alt="people case"
                src={image1_JP}
                srcSet={`${image1_JP} 1x, 
                ${image1_JP_2x} 2x`}
              />
            </picture>
          </a>

          <a
            className="example-image-link"
            href={image2_JP_2x}
            data-lightbox="example-set"
            data-title="Second image"
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${image2_Webp} 1x, 
                ${image2_JWebp_2x} 2x`}
              />

              <img
                alt="people case"
                src={image2_JP}
                srcSet={`${image2_JP} 1x, 
                ${image2_JP_2x} 2x`}
              />
            </picture>
          </a>

          <a
            className="example-image-link"
            href={image3_JP_2x}
            data-lightbox="example-set"
            data-title="Third image"
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${image3_Webp} 1x, 
                ${image3_JWebp_2x} 2x`}
              />

              <img
                alt="people case"
                src={image3_JP}
                srcSet={`${image3_JP} 1x, 
                ${image3_JP_2x} 2x`}
              />
            </picture>
          </a>

          <a
            className="example-image-link"
            href={image4_JP_2x}
            data-lightbox="example-set"
            data-title="Fourth image"
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${image4_Webp} 1x, 
                ${image4_JWebp_2x} 2x`}
              />

              <img
                alt="people case"
                src={image4_JP}
                srcSet={`${image4_JP} 1x, 
                ${image4_JP_2x} 2x`}
              />
            </picture>
          </a>

          <a
            className="example-image-link"
            href={image5_JP_2x}
            data-lightbox="example-set"
            data-title="Fifth image"
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${image5_Webp} 1x, 
                ${image5_JWebp_2x} 2x`}
              />

              <img
                alt="people case"
                src={image5_JP}
                srcSet={`${image5_JP} 1x, 
                ${image5_JP_2x} 2x`}
              />
            </picture>
          </a>

          <a
            className="example-image-link"
            href={image6_JP_2x}
            data-lightbox="example-set"
            data-title="Sixth image"
          >
            <picture>
              <source
                type="image/webp"
                srcSet={`${image6_Webp} 1x, 
                ${image6_JWebp_2x} 2x`}
              />

              <img
                alt="people case"
                src={image6_JP}
                srcSet={`${image6_JP} 1x, 
                ${image6_JP_2x} 2x`}
              />
            </picture>
          </a>
        </div>
      </div>
    </section>
  );
}

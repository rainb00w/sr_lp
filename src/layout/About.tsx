import s from '../styles/layout/about.module.scss';
import imageJPEG from '../images/home/people.jpg';
import imageJPEG_2x from '../images/home/people@2x.jpg';
import imageWebp from '../images/home/people.webp';
import imageWebp_2x from '../images/home/people@2x.webp';

export default function About(): JSX.Element {
  return (
    <>
      <div id="about" className={s.about}>
        <div className={s.about_image_container}>
          <picture className={s.about_image}>
            <source
              type="image/webp"
              srcSet={`${imageWebp} 1x, 
                ${imageWebp_2x} 2x`}
            />

            <img
              alt="people"
              src={imageJPEG}
              srcSet={`${imageJPEG} 1x, 
                ${imageJPEG_2x} 2x`}
            />
          </picture>
        </div>
        <div className={s.about_text_container}>
          <div className={s.about_text_container_borders}>
            <p>What you are looking for</p>
            <h3 className={s.about_text_heading}>
              We provide bespoke solutions
            </h3>
            <p className={s.about_text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </p>
            <button className={s.about_text_button}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

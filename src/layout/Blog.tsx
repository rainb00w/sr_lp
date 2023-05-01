import s from '../styles/layout/blog.module.scss';
import imageJPEG from '../images/home/blog.jpg';
import imageJPEG_2x from '../images/home/blog@2x.jpg';
import imageWebp from '../images/home/blog.webp';
import imageWebp_2x from '../images/home/blog@2x.webp';

export default function Blog(): JSX.Element {
  return (
    <article>
      <div id="blog" className={s.blog_height}>
        <div className={s.blog_container}>
          <div className={s.blog_image_container}>
            <picture className={s.about_image}>
              <source
                type="image/webp"
                srcSet={`${imageWebp} 1x, 
                ${imageWebp_2x} 2x`}
              />

              <img
                alt="notes"
                src={imageJPEG}
                srcSet={`${imageJPEG} 1x, 
                ${imageJPEG_2x} 2x`}
              />
            </picture>
          </div>

          <div className={s.blog}>
            <div className={s.blog_text}>
              <p>April 16 2020</p>
              <h3 className={s.blog_text_heading}>Blog Post One</h3>
              <p className={s.blog_text_description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque
                rerum temporibus doloribus iste maiores deleniti?
              </p>

              <button className={s.blog_text_button}>Read Our Blog</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

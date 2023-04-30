import { IconSelector } from '../helpers/icon-selector';
import s from '../styles/layout/team.module.scss';
import imageTeam1_JPEG from '../images/team/person1.jpg';
import imageTeam1_JPEG_2x from '../images/team/person1@2x.jpg';
import imageTeam1_WEBP from '../images/team/person1.webp';
import imageTeam1_WEBP_2x from '../images/team/person1@2x.webp';

import imageTeam2_JPEG from '../images/team/person2.jpg';
import imageTeam2_JPEG_2x from '../images/team/person2@2x.jpg';
import imageTeam2_WEBP from '../images/team/person2.webp';
import imageTeam2_WEBP_2x from '../images/team/person2@2x.webp';

import imageTeam3_JPEG from '../images/team/person3.jpg';
import imageTeam3_JPEG_2x from '../images/team/person3@2x.jpg';
import imageTeam3_WEBP from '../images/team/person3.webp';
import imageTeam3_WEBP_2x from '../images/team/person3@2x.webp';

export default function Team(): JSX.Element {
  return (
    <>
      <div className={s.team}>
        <div className={s.team_text}>
          <p>Who we are</p>
          <h3 className={s.team_heading}>Our Professional Team</h3>
          <p className={s.team_text_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>

        <ul className={s.team_gallery}>
          <li>
            <div className={s.team_gallery_container}>
              <picture className={s.team_gallery_image}>
                <source
                  type="image/webp"
                  srcSet={`${imageTeam1_WEBP} 1x, 
                ${imageTeam1_WEBP_2x} 2x`}
                />

                <img
                  alt="John"
                  src={imageTeam1_JPEG}
                  srcSet={`${imageTeam1_JPEG} 1x, 
                ${imageTeam1_JPEG_2x} 2x`}
                />
              </picture>
              <div className={s.team_gallery_overlay}>
                <IconSelector id="facebook" />
                <IconSelector id="twitter" />
                <IconSelector id="youtube" />
                <IconSelector id="linkedin" />
              </div>
            </div>

            <p className={s.team_gallery_name}>John Doe</p>
            <p className={s.team_gallery_position}> President</p>
          </li>
          <li>
            <div className={s.team_gallery_container}>
              <picture className={s.team_gallery_image}>
                <source
                  type="image/webp"
                  srcSet={`${imageTeam2_WEBP} 1x, 
                ${imageTeam2_WEBP_2x} 2x`}
                />

                <img
                  alt="Jane"
                  src={imageTeam2_JPEG}
                  srcSet={`${imageTeam2_JPEG} 1x, 
                ${imageTeam2_JPEG_2x} 2x`}
                />
              </picture>
              <div className={s.team_gallery_overlay}>
                <IconSelector id="facebook" />
                <IconSelector id="twitter" />
                <IconSelector id="youtube" />
                <IconSelector id="linkedin" />
              </div>
            </div>

            <p className={s.team_gallery_name}>Jane Doe</p>
            <p className={s.team_gallery_position}> Vice President</p>
          </li>
          <li>
            <div className={s.team_gallery_container}>
              <picture className={s.team_gallery_image}>
                <source
                  type="image/webp"
                  srcSet={`${imageTeam3_WEBP} 1x, 
                ${imageTeam3_WEBP_2x} 2x`}
                />

                <img
                  alt="Steve"
                  src={imageTeam3_JPEG}
                  srcSet={`${imageTeam3_JPEG} 1x, 
                ${imageTeam3_JPEG_2x} 2x`}
                />
              </picture>
              <div className={s.team_gallery_overlay}>
                <IconSelector id="facebook" />
                <IconSelector id="twitter" />
                <IconSelector id="youtube" />
                <IconSelector id="linkedin" />
              </div>
            </div>

            <p className={s.team_gallery_name}>Steve Smith</p>
            <p className={s.team_gallery_position}> Marketing Head</p>
          </li>
        </ul>
      </div>
    </>
  );
}

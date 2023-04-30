import { useForm } from 'react-hook-form';

import { IconSelector } from '../helpers/icon-selector';
import { FormValues } from '../helpers/types';
import s from '../styles/layout/form.module.scss';
import imageJPEG from '../images/home/contact.jpg';
import imageJPEG_2x from '../images/home/contact@2x.jpg';
import imageWEBP from '../images/home/contact.webp';
import imageWEBP_2x from '../images/home/contact@2x.webp';

export default function Form(): JSX.Element {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log('submitted', data);
  };

  return (
    <>
      <div id="contant" className={s.form}>
        <div className={s.form_image_container}>
          <picture className={s.form_image}>
            <source
              type="image/webp"
              srcSet={`${imageWEBP} 1x, 
                ${imageWEBP_2x} 2x`}
            />

            <img
              alt="person with laptop"
              src={imageJPEG}
              srcSet={`${imageJPEG} 1x, 
                ${imageJPEG_2x} 2x`}
            />
          </picture>
        </div>
        <div className={s.form_container}>
          <div className="">
            <h3 className={s.form_heading}>Request Callback</h3>

            <form
              name="contact"
              action="/contact"
              method="post"
              data-netlify="true"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className={s.form_input_container}>
                <div>
                  <label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your name"
                      {...register('username')}
                    />
                  </label>
                  {!errors.username && (
                    <p className={s.form_input_container_validation}></p>
                  )}
                  {errors.username && (
                    <p className={s.form_input_container_validation}>
                      <IconSelector id="warning" />
                      This is a required field
                    </p>
                  )}
                </div>

                <div>
                  <label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email *"
                      {...register('email', {
                        required: '   This is a required field',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Invalid email',
                        },
                      })}
                    />
                  </label>
                  {!errors.email && (
                    <p className={s.form_input_container_validation}></p>
                  )}
                  {errors.email && (
                    <p className={s.form_input_container_validation}>
                      <IconSelector id="warning" />
                      This is a required field
                    </p>
                  )}
                </div>
              </div>

              <button className={s.form_button} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
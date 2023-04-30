import s from '../styles/layout/footer.module.scss';
import { IconSelector } from '../helpers/icon-selector';

export default function Footer(): JSX.Element {
  return (
    <>
      <div className={s.footer}>
        <div className={s.footer_social}>
          <IconSelector id="facebook" />
          <IconSelector id="twitter" />
          <IconSelector id="youtube" />
          <IconSelector id="linkedin" />
        </div>
        <p>Copyright © 2021 - FinanceLedger</p>
      </div>
    </>
  );
}

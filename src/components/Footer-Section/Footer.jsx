import { useFormik } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { userSchema } from '../../helpers/Schema';
import s from './Footer.module.css';
import Error from '../Error';
import Contact from '../../assets/home/contact.jpg';
import Contact2x from '../../assets/home/contact@2x.jpg';
import ContactWebp from '../../assets/home/contact.webp';
import ContactWebp2x from '../../assets/home/contact@2x.webp';
import { ReactComponent as Facebook } from '../../assets/svg/fb.svg';
import { ReactComponent as LinedIn } from '../../assets/svg/linkedIn.svg';
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg';

const Footer = () => {
  const [error, setError] = useState(false);
  const handleSubmit = values => {
    if (values.email === '') {
      setError(true);

      return;
    }
    setError(false);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    // validationSchema: userSchema,
    onSubmit: handleSubmit,
  });
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerImageContainer}>
          <img
            src={`${Contact} 1x, ${Contact2x} 2x`}
            srcSet={`${ContactWebp} 1x, ${ContactWebp2x} 2x`}
            alt="Contact"
            className={s.footerImage}
          />
        </div>

        <div className={s.formContainer}>
          <h3 className={s.formHeader}>Request Callback</h3>

          <form onSubmit={formik.handleSubmit} className={s.form}>
            <label className={s.footerFormLabelName}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                // errorText={formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                className={s.footerFormInput}
              />
            </label>
            <label className={s.footerFormLabelEmail}>
              <input
                type="email"
                name="email"
                placeholder="Enter email*"
                value={formik.values.email}
                // errorText={formik.errors.email}
                onChange={formik.handleChange}
                className={s.footerFormInput}
              />
            </label>
            {error && <Error />}

            {/* <Field type="text" name="name" placeholder="Enter your name"></Field>
        <ErrorMessage name="email" component="div" />
        <Field type="email" name="email" placeholder="Enter email*"></Field>
        <ErrorMessage name="email" component="div" /> */}
            <button type="submit" className={s.footerButton}>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className={s.socialListContainer}>
        <ul className={s.socialList}>
          <li className={s.socialListItem}>
            <Facebook />
          </li>
          <li className={s.socialListItem}>
            {' '}
            <Twitter />
          </li>
          <li className={s.socialListItem}>
            {' '}
            <Youtube />
          </li>
          <li className={s.socialListItem}>
            {' '}
            <LinedIn />
          </li>
        </ul>
        <p className={s.socialCopyright}>Copyright © 2021 - FinanceLedger</p>
      </div>
    </footer>
  );
};

export default Footer;

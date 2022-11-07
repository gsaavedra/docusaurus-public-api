import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentación',
    Svg: require('@site/static/img/undraw_bibliophile_re_xarc.svg').default,
    description: (
      <>
        Explora y conoce nuestras documentaciones. Desde facturación para ventas, control de inventario, gestión de clientes, e-commerce, envíos, etc.
      </>
    ),
  },
  {
    title: 'Webhooks',
    Svg: require('@site/static/img/undraw_bookmarks_re_mq1u.svg').default,
    description: (
      <>
        Revisa los webhooks, son un complemento eficiente para implementar en el consumo de nuestras API's.
      </>
    ),
  },
  {
    title: 'OAuth',
    Svg: require('@site/static/img/undraw_two_factor_authentication_namy.svg').default,
    description: (
      <>
        Si requieres de una implementación rápida y sin pasos innecesarios, revisa el servicio de OAuth 2.0.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Breadcrumb.js
import React from 'react';
import css from './breadCrumb.module.scss';
import Link from 'next/link';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label={css.breadcrumb}>
      <ol className={css.breadcrumb}>
        {items.map((item, index) => (
          <li key={index} className={css.item}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.url}> {index !== 0 && <span className={css.separator}>/</span>}{item.label}</Link>
              </>
            ) : (
              <>
                <span className={css.label}> <span className={css.separator}>/</span>{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

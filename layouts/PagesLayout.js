import React from 'react';
import cx from 'classnames';

const PagesLayout = ({ children, pageClass = undefined }) => {
  return (
    <>
      <div className={cx("right_ellipse_bg", pageClass)} />
      <div className={cx("left_ellipse_bg", pageClass)} />
      {children}
    </>
  );
};

export default PagesLayout;

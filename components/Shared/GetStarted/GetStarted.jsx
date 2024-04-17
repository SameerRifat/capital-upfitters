import React from "react";
import css from "./getStarted.module.scss";
import cx from "classnames";
import Link from "next/link";

const GetStarted = ({commercial=false}) => {
  return (
    <div className={css.wrapper}>
      <div className={cx(css.get_started_container)}>
        <div className={cx(css.get_started)}>
          <div className={css.get_started_left}>
            <h3 className={cx("typoH3", "text_gradient", css.heading)}>
              Let’s try our services now
            </h3>
            <p className={cx("typoBody1", css.desc)}>
              Embark the journey of personas, imagine anything, ask <br />
              anything.
            </p>
          </div>
          <div className={css.get_started_right}>
            <Link href={`/${commercial ? 'commercial' : 'automotive'}/quote-request`} className={cx("primary_btn", css.get_started_btn)}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

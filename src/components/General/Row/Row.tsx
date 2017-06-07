import * as React from 'react';
import * as css from './Row.styl'

const Row = (props) => {
  return (
    <div className={css.row}>
      {props.children}
    </div>
  );
};

export default Row;
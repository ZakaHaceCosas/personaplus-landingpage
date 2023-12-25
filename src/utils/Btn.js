import React from 'react';

function Btn({ text, href, className }) {
  const cls = "btn " + className;

  return (
    <a className={cls} href={href}>
      {text}
    </a>
  );
}

export default Btn;
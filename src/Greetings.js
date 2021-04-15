import React from 'react';

function getLanguage(props) {
  if (props == 'de') return 'Hallo';
  if (props == 'en') return 'Hello';
  if (props == 'es') return 'Hola';
  if (props == 'fr') return 'Bonjour';
}

function Greetings(props) {
  return (
    <div className=" border my-2 p-1">
      <div>
        {getLanguage(props.lang)} {props.children}
      </div>
    </div>
  );
}

export default Greetings;

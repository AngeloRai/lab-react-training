import React from 'react';

function NumbersTable(props) {
  let boxes = [];

  for (let i = 0; i < props.limit; i++) {
    boxes.push(
      <div
        className="boxes"
        style={{ background: (i + 1) % 2 === 0 ? 'red' : 'white' }}
      >
        {i + 1}
      </div>
    );
  }

  return <div className="box-red-white">{boxes}</div>;
}

export default NumbersTable;

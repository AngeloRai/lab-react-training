
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Random(props) {
  return (
    <div className=" border border-5 my-2 p-1">
      <div>
        Random value between {props.min} and {props.max} ={' '}
        {getRandomArbitrary(props.min, props.max)}{' '}
      </div>
    </div>
  );
}

export default Random;

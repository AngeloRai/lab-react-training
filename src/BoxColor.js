function BoxColor(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center container-lg rounded border border-5 my-2 p-1"
      style={{
        height: 100,
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
      <h4>
        rgb({props.r}, {props.g}, {props.b})
      </h4>
    </div>
  );
}

export default BoxColor;

{
  /* <div style="height: 100px; background-color: rgba(255,0,0,.1);"> */
}

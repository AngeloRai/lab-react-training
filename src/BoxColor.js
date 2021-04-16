function BoxColor(props) {
  return (
    <div className="box-container">
      <div
        className="box-color" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
        
        <h4>
          rgb({props.r}, {props.g}, {props.b}) 
            <br/>#{props.r.toString(16).padStart(2, '0')}{props.g.toString(16).padStart(2, '0')}{props.b.toString(16).padStart(2, '0')}
        </h4>
        
        
        
        
      </div>
    </div>
  );
}

export default BoxColor;

{
  /* <div style="height: 100px; background-color: rgba(255,0,0,.1);"> */
}

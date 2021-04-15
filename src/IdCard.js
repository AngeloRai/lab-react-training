function IdCard(props) {
  return (
    <div className="d-flex flex-row bd-highlight mb-3">
      <div className="picture">
        <img src={props.picture} />
      </div>

      <div className="d-flex flex-column bd-highlight mb-3">
        
        <span><strong>First Name:</strong> {props.firstName}</span>
        <span><strong>Last Name: </strong>{props.lastName}</span>
        <span><strong>Gender:</strong> {props.gender}</span>
        <span><strong>Height:</strong> {props.height}</span>
        <span><strong>Birth:</strong> {props.birth}</span>
      </div>

    </div>
  );
}

export default IdCard;

function CreditCard(props) {
  let img = '';
  if ((props.type === 'Visa')) {
    img = './img/visa.png';
  } else {
    img = './img/master-card.svg';
  }

  return (
    <div className="outer-div">
      <div className="main-card-box"
        style={{
          height: 140,
          width: 250,
          color: `${props.color}`,
          backgroundColor: `${props.bgColor}`,
        }}
      >
        <div className='logo-image'>
          <img className="card-logo" src={img}/>
        </div>
        <div className="card-numbers">............{props.number.toString().slice(12, 16)}</div>
        <div className="card-data">
          Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2)} {props.bank} 
          <div>{props.owner}</div>     
        </div>
      </div>
    </div>
  );
}

export default CreditCard;

// {props.number}="Visa"
//   number="0123456789018845"
//   expirationMonth={3}
//   expirationYear={2021}
//   bank="BNP"
//   owner="Maxence Bouret"
//   bgColor="#11aa99"
//   color="white" />

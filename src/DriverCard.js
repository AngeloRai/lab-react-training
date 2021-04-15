import Rating from './Rating';

function DriverCard(props) {
    return (
        <div className="driver-card">
            <img className="car-person-pic" src={props.img}></img>
            <div>
                <div className="person-name">{props.name}</div>
                <div className="person-rating"><Rating>{props.rating}</Rating></div>
                <div className="car-info">{props.car.model} {props.car.licensePlate} </div>
            </div>
        </div>


    )
}

export default DriverCard

// name="Dara Khosrowshahi"
//         rating={4.9}
//         img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
//         car={{
//           model: 'Audi A3',
//           licensePlate: 'BE33ER',
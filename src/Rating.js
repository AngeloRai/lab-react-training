

function Rating(props) {
    
        let fullStars = ['★', '★', '★', '★', '★']
        let emptyStars = ['✩', '✩', '✩', '✩', '✩']
        let rate = Math.round(props.children)
        let totalRate = [...fullStars.splice(5-rate), ...emptyStars.splice(rate)]
    return (
        <div className="stars">
            {totalRate}
        </div>
    )
}

export default Rating

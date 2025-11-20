function Card(props) {

    return (
        <div className={`grid-item ${props.size} ${props.category}`} style={{background: `linear-gradient(135deg, ${props.color}, ${props.color}dd)`}}>
            <div class="item-overlay"></div>
            <div class="item-content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span class="category-tag">{props.category}</span>
            </div>
        </div>
    )
}

export default Card;
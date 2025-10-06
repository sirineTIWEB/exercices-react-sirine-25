function Badge(props) {
    return(
        <p className="badge" style={{backgroundColor: props.couleur, width: "fit-content", borderRadius: "15px", padding: "5px 10px" }}>
            {props.texte}
        </p>
    )
}

export default Badge
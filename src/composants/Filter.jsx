function Filter(props) {

    return (
        <button className={props.className} onClick={props.onClick}>
            <span>{props.icon}</span> {props.label}
        </button>
    )
}

export default Filter;
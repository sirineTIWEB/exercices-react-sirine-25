function Alerte({type}){

    const styles = {
        success: {
            backgroundColor: 'green',
            color: 'dark-green'
        },
        warning: {
            backgroundColor: 'orange',
            color: 'dark-orange'
        },
        error: {
            backgroundColor: 'red',
            color: 'dark-red'
        }
    }

    return(
        <div style={styles[type]}>

        </div>
    )
}

export default Alerte
function Article({titre, auteur, children}){
    return(
        <div>
            <h1>{titre}</h1>
            <h2>{auteur}</h2>
            {children}
        </div>
        
    )
}

export default Article
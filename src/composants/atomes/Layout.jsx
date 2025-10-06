function Layout({header, sidebar, children}){
    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <header style={{height: "20vh",width: "100vw",backgroundColor: "darkgrey"}}>
                {header}
            </header>
            <div style={{width: "5vw", backgroundColor: "grey"}}>
                {sidebar}
            </div>
            {children}
        </div>
    )
}

export default Layout
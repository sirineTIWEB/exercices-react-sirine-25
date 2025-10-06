import Layout from './Layout'

function Page(){

    return(
        <Layout 
            header={
                <div>
                    <h1 style={{color: "white"}}>Beau et grand titre</h1>
                </div>
            }

            sidebar={
                <div>
                    <ul style={{display: "flex", flexDirection: "column", color: "white"}}>
                        <li>Home</li>
                        <li>Contenu</li>
                        <li>Contact</li>
                    </ul>
                </div>
            }
        >
            <div>
                <h1>Ceci est mon contenu de page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex laborum possimus nisi delectus quia nesciunt, laudantium id exercitationem et officia molestiae nobis modi officiis temporibus voluptate pariatur iusto necessitatibus nulla?</p>
            </div>
        </Layout>
    )
}

export default Page
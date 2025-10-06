function Agenda(){
    const agenda = [
        '8h à 9h: Cours de 3D',
        '9h à 10h: Cours de REACT',
        '11h à 17h: Cours de 2D'
    ]

    return (
        <>
            <ul>
                {agenda.map((src, index) => (
                    <li key={index}>{src}</li>
                ))}
            </ul>
        </>
    )
}

export default Agenda
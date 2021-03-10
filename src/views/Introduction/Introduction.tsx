import { Card } from "react-bootstrap";


const Introduction = () => {
    return (
        <div style={{
            display: 'flex',
            minWidth: '100vw'
        }}>
            <>
                <br />
                <Card>
                    <Card.Body style={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '40vh',
                        minWidth: '100vw',
                        backgroundColor: 'black',
                        alignItems: 'center',                   
                    }}> <Card.Text
                        style={{
                            color: 'white',
                            fontSize: 30,
                            fontWeight: 'bold',
                            margin: 30
                        }}>
                            Centro de neurolinguistica y neuroaprendizaje
                        </Card.Text>
                        <Card.Text
                            style={{
                                color: 'white',
                                fontSize: 25,
                                margin:10
                            }}
                        >
                            <li>
                                Quienes somos y que hacemos?
                           </li>
                            Somos un quipo de profesionales dedicados a la evaluación y al tratamiento en los desafios del neurodasarrollo. <br />
                            Nuestra misión es ayudar a crecer, desarrollarse y desenvolverse en un entorno de comprencion y cariño a aquellos con necesidades diferentes.
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Img variant="bottom" src="https://www.destructoid.com/ul/620483-rainbowsixsiegefuture2021tcinematic.jpg" /> */}
                </Card>
            </>
        </div>
    )
}

export default Introduction;
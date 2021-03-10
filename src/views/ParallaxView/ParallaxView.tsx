import { Parallax } from 'react-parallax';

import img from '../../img/parallaxViewBg.jpeg'

const ParallaxView = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', minWidth: '100vw' }}>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-300}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <h1 style={{
                        color: 'dark',
                        fontSize: 50,
                        alignItems: 'center',
                        margin: 60,
                        fontWeight: 'bolder'
                    }}>Diagnósticos para las necesidades diferentes</h1>
                    <h3
                        style={{
                            color: 'dark',
                            fontWeight: 'bold',
                            marginTop: '40vh',
                            marginLeft: 60,
                            marginRight: 60
                        }}
                    >La importancia de la contención y el cariño en el desarrollo</h3>
                </div>
                <div style={{ height: '80vh' }} />
            </Parallax>
        </div>
    )
}

export default ParallaxView;
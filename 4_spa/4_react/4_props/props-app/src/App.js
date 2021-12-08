import './App.css';

import { Paragraph, Box, Circle } from './components'

function App()
{
    const arrExample = [
        {
            text: "Hallo Mustapha",
            hasArrow: true,
            color: "red"
        },
        {
            text: "Hallo Hamid",
            hasArrow: true,
            color: "yellow"
        },
        {
            text: "Hallo Welt",
            hasArrow: false,
            color: "purple"
        },
    ];

    return (
        <>
            {
                arrExample.map(({ hasArrow, color, text }, i) =>
                {
                    return(
                        <Paragraph key={ i } hasArrow={ hasArrow } color={ color }>
                            { text }
                        </Paragraph>
                    )
                })

                // arrExample.map((item, i) =>
                // {
                //     return(
                //         <Paragraph key={ i } hasArrow={ item.hasArrow } color={ item.color }>
                //             { item.text }
                //         </Paragraph>
                //     )
                // })
            }

            {/* <Paragraph hasArrow={ true } color="red">
                <i>
                    Hallo Mustapha
                </i>
            </Paragraph>

            <Paragraph hasArrow={ true } color="blue">
                Hallo Welt
            </Paragraph>

            <Paragraph color="yellow">
                Ich bin ein Komponent
            </Paragraph> */}

            <Box color="purple">
                Test
            </Box>

            <Circle color="black" showInnerCircle={ false }></Circle>
        </>
    );
}

export default App;

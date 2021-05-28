import React from 'react'
import {Container} from "@material-ui/core"

export default function Main(props) {
    return (
        <Container maxWidth="lg">
            <main>
                {props.children}
            </main>
        </Container>
    )
}

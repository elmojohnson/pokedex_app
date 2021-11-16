import React from 'react'
import { Badge } from 'react-bootstrap'

function PokeTypes({types}) {
    return (
        <div>
            {
                types.map((type, i) => {
                    return(
                        <Badge bg="light text-secondary border me-1 text-capitalize" key={i}>{type.type.name}</Badge>
                    )
                })
            }
        </div>
    )
}

export default PokeTypes

import React from 'react'
import { Badge } from 'react-bootstrap'

function PokeAbilities({abilities}) {
    return (
        <div>
            {
                abilities.map((a, i) => {
                    return(
                        <Badge bg="light text-secondary border me-1 text-capitalize" key={i}>{a.ability.name}</Badge>
                    )
                })
            }
        </div>
    )
}

export default PokeAbilities

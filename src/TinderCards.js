import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'
function TinderCards() {
    const [people, setPeople] = useState([{
        name: 'Elon Musk',
        url: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
    },

    {
        name: 'Jeff bezos',
        url: "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e"
    }
])

const Swiped = (direction, nameToDelete)=>{
    console.log('removing', nameToDelete)
}
const outOfFrame = (name)=>{
    console.log(name, 'leaving screen')
}

    return (

        <div className="tinder_card">
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir)=>Swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                        <div 
                        style={{backgroundImage: "url("+person.url+")"}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                </TinderCard>
               
           ))}
            </div>
        </div>
    )
}

export default TinderCards

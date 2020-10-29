import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core'
import axios from './axios'
function TinderCards() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
       async function fetchData(){
           const req = await axios.get('/tinder/card')
           setPeople(req.data)
       }
       fetchData();
    }, [])
    console.log(people)

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
                        style={{backgroundImage: "url("+person.imgUrl+")"}}
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

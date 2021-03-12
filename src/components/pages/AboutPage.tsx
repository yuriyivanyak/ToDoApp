import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <div>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Architecto quia eligendi consequatur velit eveniet! Vitae tenetur ipsa at
            ex mollitia voluptatum? Cumque et, quasi distinctio blanditiis
                 iusto id enim ratione!</p>
            <button className="btn" onClick={() => history.push('/')}>Back</button>
        </div>
    )
}

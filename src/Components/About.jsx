import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus minus consectetur veritatis mollitia nostrum necessitatibus esse, quisquam quae, suscipit nemo perferendis. Enim, explicabo maiores beatae laudantium at, alias, debitis provident sequi cumque nesciunt id. Neque.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;

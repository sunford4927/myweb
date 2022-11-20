import React from 'react';
import PropTypes from 'prop-types';

function Fruits({name,color,count}){
    console.log(name)
    return <h5>{count} Nice {name} is {color}</h5>
}

export default Fruits


Fruits.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
}
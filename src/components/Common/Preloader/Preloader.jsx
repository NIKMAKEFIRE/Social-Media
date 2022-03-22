import React from 'react'
import preloader from '../../../assets/images/loader.gif'

let Preloader = (props) => {
    return (
        <div>
            <img
                style={{ width: '150px', height: '150px' }}
                src={preloader} />
        </div>
    )
}

export default Preloader
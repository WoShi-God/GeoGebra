import React, { useEffect } from 'react';
import showModel from './model/modelshow'
export default function modelout() {
    useEffect(() => {
        showModel()
    }, [])

    return (
        <>

            <div className='firstbox' style={{ position: 'relative' }}>

            </div>
        </>
    )
}

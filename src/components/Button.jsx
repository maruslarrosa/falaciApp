import React from 'react'

export const Button = (props) => {
    const { name, path } = props
    let audio = new Audio(path)

    const initAudio = () => {
        audio.play()
    }

    return (
        <button onClick={initAudio}>
            {name}
        </button>


    )
}
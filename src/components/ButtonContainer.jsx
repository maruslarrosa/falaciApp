import { Button } from './Button'
import nuevemm from '../assets/audio/9mm.mp3'

export const ButtonContainer = () => {
    return (
        <div>
            <Button name="9mm" path={nuevemm} />
        </div>
    )
}
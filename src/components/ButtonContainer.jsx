import { Button } from './Button'
import { nuevemm, brutoignorante, ctm, mevoy } from '../assets/audio'

export const ButtonContainer = () => {
    return (
        <div className='button-container'>
            <Button name="9mm" path={nuevemm} />
            <Button name="brutoignorante" path={brutoignorante} />
            <Button name="ctm" path={ctm} />
            <Button name="mevoy" path={mevoy} />
        </div>
    )
}
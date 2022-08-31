import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
export default function Decrement() {
    const [decrement, setDecrement] = useState(0);
    const [DecDisable, setDecDisable] = useState(false);

    useEffect(() => {
        if (decrement === -10) {
            return setDecDisable(true);
        }
    }, [decrement])

    const handleDecrement = () => {
        setDecrement((dec) => dec - 1);
    }
    return (
        <div>
            <Button
                onClick={handleDecrement}
                variant='outlined'
                color='secondary'
                DecDisable={DecDisable}
            > Decrement</Button>{
                DecDisable ? <p>You reached</p> :
                    <p> Decremented: {decrement}</p>
            }
        </div>
    )
}
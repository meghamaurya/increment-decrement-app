import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
export default function Increment() {
    const [increment, setIncrement] = useState(0);
    const [incDisable, setIncDisable] = useState(false);
    useEffect(() => {
        if (increment === 10) {
            setIncDisable(true);
        }
    }, [increment])
    const handleIncrement = () => {
        setIncrement((inc) => inc + 1);
    }
    return (
        <div>
            <Button
                onClick={handleIncrement}
                variant='outlined'
                color='secondary'
                disabled={incDisable}>
                Increment
            </Button>
            {incDisable ? <p>You reached</p> : <p>Incremented: {increment} </p>}
        </div>
    )
}
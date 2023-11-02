
import { Button, ButtonProps } from "@mui/joy";
import React from 'react';

// Define your interface for WUButton props
interface WUButtonProps extends ButtonProps {
    text: string;
    onClick: () => void;
    startDecorator?: React.ReactNode; // If you want to pass a custom startDecorator
}

export default function WUButton({ text, onClick, startDecorator, ...rest }: WUButtonProps) {
    return (
        <Button {...rest} startDecorator={startDecorator}>
            {text}
        </Button>
    );
}

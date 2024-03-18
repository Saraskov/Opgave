import * as React from 'react';

// Documentation:
// Read more in Figma - https://www.figma.com/file/46WVDubA4q0Ek8XdS1Oqav/Forskellige-projekter?type=design&node-id=545-123&mode=dev

type CardProps = {
    id: string;
    header: string;
    children: React.ReactNode | string;
    button: string | null,
    buttonEvent: any | null
}

export default function Card({id, header, children, button, buttonEvent}: CardProps) {

    return (
        <div className="card" id={id}>
            <div className='card-info'>Button Clicked</div>
            <div>
                <h2 className="card-header">{header}</h2>
                <div className="card-main">{children}</div>
            </div>
            {button? <button className="btn" type="button" onClick={buttonEvent}>{button}</button> : ''}
        </div>
    )
}
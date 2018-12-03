import React from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button } from '@blueprintjs/core';

export interface IButtonProps { 
    title: string;
    text: string;
}

export default class ButtonComponent extends React.Component<IButtonProps> {
    public render(): JSX.Element {
        return (
            <div>
                <p>{this.props.title}</p>
                <Button intent="primary" text={this.props.text}/>
            </div>
        );
    }
}
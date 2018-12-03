import React from 'react';
import styles from './TestComponent.module.css';
import i18next from '../../i18n';

export interface ITestProps {
    message: string;
}

export default class TestComponent extends React.Component<ITestProps> {
    constructor(props: ITestProps) {
        super(props);
    }
    public render(): JSX.Element {
        return (
            <div className={styles.test}>
                {i18next.t('testLabel') + " : " + this.props.message} 
            </div>
        );
    }
}


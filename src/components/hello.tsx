import * as React from 'react';

export interface HelloProps { now: string; }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>{this.props.now}</h1>;
    }
}
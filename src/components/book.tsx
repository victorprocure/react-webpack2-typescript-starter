import * as React from 'react';
import { IBook } from '../models/book';

export class Book extends React.Component<IBook, undefined> {
    render() {
        return <div className="answer"><h4>{this.props.title}</h4></div>;
    }
}
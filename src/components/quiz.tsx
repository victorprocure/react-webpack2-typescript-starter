import * as React from 'react';
import { IBook } from '../models/book';
import { IAuthor } from '../models/author';
import { Book } from './book';

export interface IQuizProperties {
    data: IAuthor[]
}

export interface IQuizState {
    author: IAuthor;
    books: IBook[]
}

export class Quiz extends React.Component<IQuizProperties, IQuizState> {
    constructor(props: IQuizProperties) {
        super(props);

        console.log(this.props);

        this.state = {
            author: props.data[0],
            books: props.data[0].books
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.state.author.image} className="author-image img-responsive" />
                    </div>
                    <div className="col-md-7">
                        {this.state.books.map((b) => {
                            return <Book title={b.title} />
                        }, this)}
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        );
    }
}
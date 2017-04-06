import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as authors from './data/authors.json';

import { IAuthor } from './models/author';
import { Quiz } from './components/quiz';

console.log('AUTHORS: ', authors);

const authData = authors as any;

ReactDOM.render(
    <Quiz data={authData} />,
    document.getElementById("app")
);
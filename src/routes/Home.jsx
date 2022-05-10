import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Movie</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
            </div>
        );
    }
}
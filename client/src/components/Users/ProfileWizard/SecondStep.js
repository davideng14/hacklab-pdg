import React, { Component } from 'react';
import {FormGroup, Label, Input, FormText } from 'reactstrap';

class SecondStep extends Component {

    render() {
        return (
            <>
                <h2>Information Extracted from sources: </h2>
                <FormGroup>
                    <Label for="exampleUrl">Name</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="profile"
                    defaultValue='John'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">LastName</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="profile"
                    defaultValue='Doe'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">Email</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="profile"
                    defaultValue='johndoe@example.com'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">Profession</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="profile"
                    defaultValue='Systems Engineer'
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">Profession</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="profile"
                    defaultValue='Systems Engineer'
                    />
                </FormGroup>
            </>
        );
    }
}

export default SecondStep;
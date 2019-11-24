import React, { Component } from 'react';
import {FormGroup, Label, Input, FormText } from 'reactstrap';

class FirstStep extends Component {

    render() {
        return (
            <>
                <FormGroup>
                    <Label for="exampleFile">PDF CV</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">LinkedIn Profile</Label>
                    <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="profile"
                    />
                </FormGroup>
            </>
        );
    }
}

export default FirstStep;
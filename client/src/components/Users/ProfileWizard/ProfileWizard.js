import React, { Component } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

class ProfileWizard extends Component {

    render() {
        const { currentStep } = this.props;
        switch (currentStep) {
            case 1:
                return (<FirstStep></FirstStep>);
            case 2:
                return (<SecondStep></SecondStep>);
            case 3:
                return (<ThirdStep></ThirdStep>);
            case 4:
                return (<FourthStep></FourthStep>);
            default:
                return (<FourthStep></FourthStep>);
        }
    }
}

export default ProfileWizard;
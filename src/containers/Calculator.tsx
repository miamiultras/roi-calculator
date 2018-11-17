import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Step1 from '../components/Calculator/step1';
import Step2 from '../components/Calculator/step2';
import Step3 from '../components/Calculator/step3';

class Calculator extends Component<{ history: any }> {
  state = {
    submitted: false,
  };

  handleSubmit = () => {
    this.setState(
      {
        submitted: true,
      },
      () => this.props.history.push('/'),
    );
  }
  render() {
    return (
      <Switch>
        <Redirect from='/calculator' exact to='/calculator/step1' />
        <Route path='/calculator/step1' component={Step1} />
        <Route path='/calculator/step2' component={Step2} />
        <Route path='/calculator/step3' component={Step3} />
      </Switch>
    );
  }
}

export default Calculator;

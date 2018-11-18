import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Step1 from '../components/Calculator/Step1/Step1';
import Step2 from '../components/Calculator/Step2/Step2';
import Step3 from '../components/Calculator/Step3/Step3';
import Report from '../components/Calculator/Report/Report';
import ExtendedReport from '../components/Calculator/Report/ExtendedReport';

class Calculator extends Component<{ history: any }> {
  state = {
    submitted: false,
    qualityLevel: 'mid',
    estimatedSellInput: '15000',
    pricePerTicket: '19.99',
  };

  handleSubmit = (): void => {
    console.log('test');
    this.setState(
      {
        submitted: true,
      },
      () => this.props.history.push('/calculator/report'),
    );
  }

  handleChange = (e: any): void => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state);
    const { qualityLevel, estimatedSellInput, pricePerTicket } = this.state;
    return (
      <div style={{ width: '70%' }}>
        <Switch>
          <Redirect from='/calculator' exact to='/calculator/step1' />
          <Route
            path='/calculator/step1'
            render={props =>
              <Step1
                {...props}
                qualityLevel={qualityLevel}
                handleChange={this.handleChange}
              />
            }
          />
          <Route
            path='/calculator/step2'
            render={props =>
              <Step2
                {...props}
                estimatedSellInput={estimatedSellInput}
                handleChange={this.handleChange}
              />
            }
          />
          <Route
            path='/calculator/step3'
            render={props =>
              <Step3
                {...props}
                pricePerTicket={pricePerTicket}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            }
          />
          <Route
            path='/calculator/report'
            render={() => <Report />}
          />
          <Route
            path='/calculator/extended-report'
            render={() => <ExtendedReport />}
          />
        </Switch>
      </div>
    );
  }
}

export default Calculator;

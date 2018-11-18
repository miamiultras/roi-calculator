import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { calculateService } from '../services/calculate.service';

import Step1 from '../components/Calculator/Step1/Step1';
import Step2 from '../components/Calculator/Step2/Step2';
import Step3 from '../components/Calculator/Step3/Step3';
import Report from '../components/Calculator/Report/Report';
import ExtendedReport from '../components/Calculator/Report/ExtendedReport';
import Spinner from '../components/Spinner/Spinner';
import { Form } from '../interfaces/form.interface';

class Calculator extends Component<{ history: any }> {
  state = {
    data: [],
    extendedData: [],
    isLoading: false,
    submitted: false,
    error: null,
    form: {
      qualityLevel: 'mid',
      estimatedSellInput: '15000',
      pricePerTicket: '19.99',
    },
  };

  calculateData = (form: Form) => {
    calculateService.calculate(form)
      .then(({ data, extendedData }: any) => {
        this.setState({ data, extendedData, isLoading: false });
      })
      .catch((error: Error) => {
        this.setState({ error, isLoading: false });
      });
  }

  handleSubmit = (): void => {
    const { form } = this.state;
    this.setState(
      {
        submitted: true,
        isLoading: true,
      },
      () => this.props.history.push('/calculator/report'),
    );
    this.calculateData(form);
  }

  handleChange = (e: any): void => {
    const { name, value } = e.target;
    this.setState({
      form: {
        [name]: value,
      },
    });
  }

  render() {
    console.log(this.state);
    const { qualityLevel, estimatedSellInput, pricePerTicket } = this.state.form;
    const { data, extendedData, isLoading, error } = this.state;
    return (
      <div style={{ width: '70%', display: 'flex' }}>
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
            render={() => isLoading ? <Spinner /> : <Report data={data} />}
          />
          <Route
            path='/calculator/extended-report'
            render={() => <ExtendedReport extendedData={extendedData} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Calculator;

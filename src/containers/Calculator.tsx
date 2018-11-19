import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { dataActions } from '../store/actions/data.actions';

import { Form } from '../interfaces/form.interface';

import Step1 from '../components/Calculator/Step1/Step1';
import Step2 from '../components/Calculator/Step2/Step2';
import Step3 from '../components/Calculator/Step3/Step3';
import Report from '../components/Calculator/Report/Report';
import ExtendedReport from '../components/Calculator/Report/ExtendedReport';
import Spinner from '../components/Spinner/Spinner';
import { Service } from '../interfaces/service.interface';

class Calculator extends Component<
  {
    history: any,
    getData: Function,
    getExtendedData: Function,
    isLoading: boolean,
    items: { data: Service[], extendedData: Service[] },
  }
  > {
  state = {
    form: {
      qualityLevel: 'mid',
      estimatedSellInput: '15000',
      pricePerTicket: '19.99',
    },
  };

  calculateData = (): void => {
    const { form } = this.state;
    this.props.history.push('/calculator/report');
    this.props.getData(form);
  }

  calculateExtendedData = (): void => {
    const { form } = this.state;
    this.props.history.push('/calculator/extended-report');
    this.props.getExtendedData(form);
  }

  handleChange = (e: any): void => {
    const { name, value, type } = e.target;
    if (type !== 'radio' && !/^-?\d+\.?\d*$/.test(value)) {
      return;
    }
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  }

  render() {
    const { qualityLevel, estimatedSellInput, pricePerTicket } = this.state.form;
    const { items, isLoading } = this.props;
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
                calculateData={this.calculateData}
              />
            }
          />
          <Route
            path='/calculator/report'
            render={
              () => isLoading ? <Spinner /> : <Report data={items.data} calculateData={this.calculateExtendedData} />}
          />
          <Route
            path='/calculator/extended-report'
            render={
              () => isLoading ? <Spinner /> : <ExtendedReport extendedData={items.extendedData} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ data }: any) => {
  return {
    items: data.items,
    isLoading: data.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: (form: Form) => dispatch(dataActions.getData(form)),
    getExtendedData: (form: Form) => dispatch(dataActions.getExtendedData(form)),
  };
};

const connectedCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
export { connectedCalculator as Calculator };

import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Section from './components/Section/Section.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.js';
import Statistics from './components/Statistics/Statistics';

export default class App extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => {
  //     return {
  //       percentage: Math.round(
  //         (prevState.good /
  //           (prevState.good + prevState.neutral + prevState.bad)) *
  //           100,
  //       ),
  //     };
  //   });
  // };

  handleFeedback = field => {
    this.setState(prevState => {
      return {
        [field]: prevState[field] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <Layout>
        <Section>
          <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={Math.floor((good / total) * 100)}
            />
          ) : (
            'No feedback'
          )}
        </Section>
      </Layout>
    );
  }
}

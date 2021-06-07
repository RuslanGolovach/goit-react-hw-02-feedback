import React, { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerBtnClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalSum = good + neutral + bad;
    const positivePercentageFeedback = Math.round((good / totalSum) * 100);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handlerBtnClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalSum ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalSum}
              positivePercentage={positivePercentageFeedback}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;

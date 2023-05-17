import { useState } from "react";
import css from "./App.module.css";
import { Section } from "./Section";
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Statistics } from "./Statistics";
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const putReview = ({ target }) => {
    const feedback = target.textContent;

    switch (feedback) {
      case "good":
        setGood(state => state + 1);
        break;
      case "neutral":
        setNeutral(state => state + 1);
        break;
      case "bad":
        setBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good / countTotalFeedback() * 100).toFixed();
  };

  return (
    <div className={css.container}>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={putReview}
        />

        {countTotalFeedback()
          ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          : <Notification />}
      </Section>
    </div>
  );
};

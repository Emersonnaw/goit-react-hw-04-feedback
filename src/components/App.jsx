
// import { useEffect, useState } from 'react';

// export const App = () => {
  
//   const [good, setGood] = useState(555);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(99);
//   console.dir(useState);
//   console.dir(good );
//   console.log(bad);
//   useEffect(() => {
//     console.log("wiev", good, neutral, bad);
//     console.dir(good)
//  },[good,neutral,bad ])
//  console.dir(useState[0])

//   return (
     

//     <div>
 
//       <button type="button" onClick={() => setGood(state => state + 1)}>+</button>
//       <button type="button" onClick={()=> setBad(state => state-1)}>-</button>
//     </div>

//   );

// }

// import React, { Component} from 'react';
// import {Section} from './Section';
// import {FeedbackOptions} from './FeedbackOptions';
// import css from './App.module.css';
// import {Notification} from './Notification';
// import {Statistics} from './Statistics';
// export class App extends Component {

//   state = {
//     good:0,
//     neutral:0,
//     bad:0,
//   };

 


//   getKeyToState =() => {
//     return (Object.keys(this.state));
//   }

//   putReview = ({ target }) => {
//     const val = target.textContent;
//     this.setState(prevState => ({
//       [val]:prevState[val] + 1,
//     }))
//   }

//   countTotalFeedback = () => {
//     return (
//       Object.values(this.state).reduce((previusNumber, number) => {
//         return previusNumber + number;
//       }, 0)

//     );
    
//   }
 
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return (
//      ((good/ this.countTotalFeedback())*100).toFixed() );
    
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className ={css.container}>
//         <Section title="Please leave Feedback"  >
//           <FeedbackOptions
//             options={this.getKeyToState()}
//             onLeaveFeedback={this.putReview}
//           />
          
//           {this.countTotalFeedback()
//             ?
//             <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback()}
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//               />
//             :
//             <Notification />
//           }
//         </Section>
//       </div>
//     );
//   }
// };

import React, { Component } from 'react'

import { MathProblems, Problem } from 'math-problem-generator'

class ProblemUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: new Problem(props.problem[0], '+', props.problem[1])
    };
  }
  render() {
    const problem = this.state.problem;
    return (
      <div className="problem-ui">
        <div className="expression">
          <span className="param x">{problem.x}</span>
          <span className="op">{problem.op}</span>
          <span className="param y">{problem.y}</span>
          <span className="symbol eq">=</span>
        </div>
        <div className="result-input">
          <input/>
        </div>
      </div>
    )
  }
}

export default class App extends Component {

  render () {
    const generator = MathProblems.createGenerator(1);
    return (
      <div>
        <h1>Let's Learn Some Math</h1>
          <ul className="problems">
            {
              generator.problems.map((p, i) => {
                return <li key={i}><ProblemUI problem={p} /></li>
              })
            }
          </ul>
        <code>version: {MathProblems.version}</code>
      </div>
    )
  }
}

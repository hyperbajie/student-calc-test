import React from "react";
import { ReturnBtn } from "./Home";
import { showConfirm } from "./Confirm";
import { message, Button } from "antd";
import "./TestPaper.css";

function getRandomNum() {
  return Math.round(Math.random() * 90 + 10);
}

function getRandomArr() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(getRandomNum());
  }
  return result;
}

function getTestPaper() {
  let one = getRandomArr();
  let two = getRandomArr();
  let result = [];
  one.forEach((n, index) => {
    result.push({
      id: index,
      n1: n,
      n2: two[index],
      answer: n * two[index],
      correct: true,
      userAnswer: 0,
    });
  });

  return result;
}

export class TestPaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: getTestPaper(),
      complete: false,
    };
  }

  render() {
    let testBody = this.state.paper.map((item) => {
      let classList = ["answerInput"];
      if (this.state.complete) {
        classList.push(item.correct ? "correctColor" : "wrongColor");
        classList.push("whiteFont");
      }
      classList = classList.join(" ");
      return (
        <div key={item.id} className="questionRow">
          <span>{item.n1}</span>
          <span>*</span>
          <span>{item.n2}</span>
          <span>=</span>
          <input
            className={classList}
            type="number"
            disabled={this.state.complete}
            onChange={(e) => {
              item.userAnswer = e.target.value;
            }}
          ></input>
        </div>
      );
    });

    return (
      <div className="content">
        <div className="questionBlock">{testBody}</div>
        <div className="btnRow">
          <Button onClick={this.submit.bind(this)}>提交</Button>
          <ReturnBtn />
        </div>
      </div>
    );
  }

  submit() {
    if (this.state.complete) {
      message.error("已经提交过了",1);
      return;
    }
    showConfirm("是否确认提交", () => {
      message.success("提交成功",1);
      let paper = this.state.paper;
      paper.forEach((item) => {
        item.correct = Number(item.userAnswer) === item.answer;
      });
      this.setState({
        complete: true,
        paper,
      });
    });
  }
}

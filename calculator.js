const body = document.querySelector("body");
const output = document.querySelector(".main__display__output");

// 초기화
let firstOperand = null;
let operator = null;
let waitingState = false;

const formatResult = (num) => {
  const str = num.toString();
  if (str.length <= 11) return str;
  const fixed = num.toFixed(10); // 최대한 길게 자름
  return fixed.slice(0, 11).replace(/\.?0+$/, ""); // 소수점 이하 0 제거
};

// 사직연산 객체 메서드
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

// 화면에 숫자표시
const handleNumberInput = (value) => {
  if (output.textContent.length >= 11) return;

  if (waitingState) {
    output.textContent = value;
    waitingState = false;
  } else {
    if (output.textContent === "0" && value !== ".") {
      output.textContent = value;
    } else if (value === "." && output.textContent.includes(".")) {
      return;
    } else {
      output.textContent += value;
    }
  }
};

// 연산 함수
const handleOperator = (nextOperator) => {
  const inputValue = Number(output.textContent);
  ("123abc");
  // 퍼센티지 처리
  if (nextOperator === "%") {
    if (firstOperand !== null) {
      const percentValue = firstOperand * (inputValue / 100);
      output.textContent = formatResult(percentValue);
    } else {
      const percentValue = inputValue / 100;
      output.textContent = formatResult(percentValue);
    }
    return;
  }

  // 연산자 연속입력 대응
  if (operator && waitingState) {
    operator = nextOperator;
    return;
  }

  // 연산 처리
  if (firstOperand == null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = operators[operator](firstOperand, inputValue);
    output.textContent = formatResult(result);
    firstOperand = result;
  }

  // 다음 계산 준비
  operator = nextOperator;
  waitingState = true;
};

// = 처리 함수
const handleEquals = () => {
  if (!operator) return;
  const secondOperand = Number(output.textContent);
  if (firstOperand == null || isNaN(secondOperand)) return;

  const result = operators[operator](firstOperand, secondOperand);
  output.textContent = formatResult(result);
  firstOperand = null;
  operator = null;
  waitingState = false;
};

// 마지막 숫자 삭제 함수
const handleDelete = () => {
  output.textContent = output.textContent.slice(0, -1) || "0";
};

// C버튼 함수
const resetCalculator = () => {
  output.textContent = "0";
  firstOperand = null;
  operator = null;
  waitingState = false;
};

// 키보드 입력 이벤트
body.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key >= "0" && e.key <= "9") {
    handleNumberInput(e.key);
  } else if (e.key === ".") {
    handleNumberInput(".");
  } else if (e.key === "Backspace") {
    handleDelete();
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    handleOperator(e.key);
  } else if (e.key === "Enter") {
    handleEquals();
  }
});

// 클릭 이벤트
body.addEventListener("click", (e) => {
  console.log(e.target.value);
  console.log(typeof e.target.value);
  const val = e.target.value;
  if (!val) return;

  if (!isNaN(val) || val === ".") {
    handleNumberInput(val);
  } else if (val === "backspace") {
    handleDelete();
  } else if (val === "=") {
    handleEquals();
  } else if (["+", "-", "*", "/", "%"].includes(val)) {
    handleOperator(val);
  } else if (val === "reverse") {
    output.textContent = Number(output.textContent) * -1;
  } else if (val === "reset") {
    resetCalculator();
  }
});

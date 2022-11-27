// JS函数调用堆栈，可以通过F5 > debugger > CALL STACK查看调用栈
const func1 = () => {
  func2();
};
const func2 = () => {
  func3();
};
const func3 = () => {};

func1();

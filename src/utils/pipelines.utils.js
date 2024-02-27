export class Pipeline {
  constructor(funcs) {
    this.funcs = funcs;
  }
  
  run(input) {
    return this.funcs.reduce((acc, fn) => fn(acc), input);
  }
}

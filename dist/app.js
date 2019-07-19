"use strict";
class Data {
    constructor(data) {
        this.data = data;
    }
}
const assertNever = (x) => {
    throw new Error(`Unexpected object: ${x}`);
};
const renderOperationState = (state) => {
    switch (state.kind) {
        case "completed":
            console.log(`Operation state completed: ${state.data}`);
            break;
        case "inprogress":
            console.log("Operation state in progress");
            break;
        case "failed":
            console.log(`Operation state failed: ${state.error}`);
            break;
        default:
            assertNever(state);
    }
};
let inProgress = { kind: "inprogress" };
let failed = { kind: "failed", error: "error" };
let completed = { kind: "completed", data: new Data("data") };
renderOperationState(inProgress);
// class OperationState {
//   data?: Data;
//   inProgress?: boolean;
//   error?: string;
//   constructor(data?: Data, inProgress?: boolean, error?: string) {
//     this.data = data;
//     this.inProgress = inProgress;
//     this.error = error;
//   }
// }
// const renderOperationState = (state: OperationState) => {
//   if (state.data) {
//     console.log(`Operation state completed: ${state.data.data}`);
//   } else if (state.inProgress) {
//     console.log("Operation state in progress");
//   } else if (state.error) {
//     console.log(`Operation state failed: ${state.error}`);
//   } else {
//     throw new Error(`Unexpected object: ${state}`);
//   }
// };
// renderOperationState(new OperationState(undefined, undefined, undefined));
// renderOperationState(new OperationState(new Data("data"), false, undefined));
// renderOperationState(new OperationState(undefined, false, "error"));
// renderOperationState(new OperationState(undefined, true, undefined));
// renderOperationState(new OperationState(new Data("data"), false, undefined));
// renderOperationState(new OperationState(undefined, false, "error"));
//# sourceMappingURL=app.js.map
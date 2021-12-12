"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tvm_calculator_1 = __importDefault(require("tvm-calculator"));
const app = (0, express_1.default)();
const port = 9000;
app.use(express_1.default.json());
const compoundingFrequency = 1;
const paymentFrequency = 1;
app.post("/compute-pv", (req, res) => {
    const input = { cf: compoundingFrequency, pf: paymentFrequency, nper: req.body.nper, fv: req.body.fv, pmt: 0, rate: req.body.rate, pv: 0 };
    const result = tvm_calculator_1.default.calcPV(input);
    res.send(result);
});
app.post("/compute-fv", (req, res) => {
    const input = { cf: compoundingFrequency, pf: paymentFrequency, nper: req.body.nper, fv: 0, pmt: 0, rate: req.body.rate, pv: req.body.pv };
    const result = tvm_calculator_1.default.calcFV(input);
    res.send(result);
});
app.post("/compute-rate", (req, res) => {
    const input = { cf: compoundingFrequency, pf: paymentFrequency, nper: req.body.nper, fv: req.body.fv, pmt: 0, rate: 0, pv: req.body.pv };
    const result = tvm_calculator_1.default.calcInterestRate(input);
    res.send(result);
});
app.post("/compute-nper", (req, res) => {
    const input = { cf: compoundingFrequency, pf: paymentFrequency, nper: 0, fv: req.body.fv, pmt: 0, rate: req.body.rate, pv: req.body.pv };
    const result = tvm_calculator_1.default.calcNPer(input);
    res.send(result);
});
app.listen(port);
console.log(`Server is running at http://localhost:${port}`);

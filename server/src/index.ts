import express from "express";
import TvmCalculator from "tvm-calculator";

interface tvmInput {
    pv: number,
    nper: number,
    fv: number, 
    pmt: number,
    rate: number,
    cf: number,
    pf: number
}

const app = express();
const port = 9000;

app.use(express.json());

const compoundingFrequency = 1;
const paymentFrequency = 1;

app.post("/compute-pv", (req, res)=> {

    const input: tvmInput = {cf: compoundingFrequency, pf: paymentFrequency, nper: req.body.nper, fv: req.body.fv, pmt: 0, rate: req.body.rate, pv: 0};

    const result: number = TvmCalculator.calcPV(input);

    res.send(result);
});


app.post("/compute-fv", (req, res)=> {

    const input: tvmInput = {cf: compoundingFrequency, pf: paymentFrequency, nper: req.body.nper, fv: 0, pmt: 0, rate: req.body.rate, pv: req.body.pv};

    const result: number = TvmCalculator.calcFV(input);

    res.send(result);
});


app.post("/compute-rate", (req, res)=> {

    const input: tvmInput = {cf: compoundingFrequency, pf: paymentFrequency, nper: req.body.nper, fv: req.body.fv, pmt: 0, rate: 0, pv: req.body.pv};

    const result: number = TvmCalculator.calcInterestRate(input);

    res.send(result);
});


app.post("/compute-nper", (req, res)=> {

    const input: tvmInput = {cf: compoundingFrequency, pf: paymentFrequency, nper: 0, fv: req.body.fv, pmt: 0, rate: req.body.rate, pv: req.body.pv};

    const result: number = TvmCalculator.calcNPer(input);

    res.send(result);
});




app.listen(port);

console.log(`Server is running at http://localhost:${port}`);
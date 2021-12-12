# tvm-api
Simple node server with API ready for computing the Time Value of Money

Endpoints:
- /compute-pv
- /compute-fv
- /compute-rate
- /compute-nper

All endpoints are POST method.

## Form Data / Property
- pv - The present value of an investment.
- fv - The future value of an investment.
- rate - The interest rate per time period.
- nper - The number of period (yearly)

## Computing

Pass the three property except the one you are looking for.

For example: If I want to look for a PV of an investment, I'll pass the Nper, Rate, and Fv to the /compute-pv endpoint.

#### Compute the Present Value
endpoint is: ```/compute-pv```

Form data to be passed: 
```
'{"nper":"3" , "rate":"10", "fv": 100}'
```


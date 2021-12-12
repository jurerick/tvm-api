# tvm-api
## API for computing the Time Value of Money

All endpoints are POST method.


Compute the Present Value
#### /compute-pv
Sample Arguments: 
```
'{"nper":"3" , "rate":"10", "fv": 100}'
```


Compute the Future Value
#### /compute-fv
Sample Arguments: 
```
'{"nper":"3" , "rate":"10", "pv": -100}'
```

Compute the Rate
#### /compute-rate
Sample Arguments: 
```
'{"nper":"3" , "fv": 1000, "pv": -100}'
```

Compute the No. of Period
#### /compute-nper
Sample Arguments: 
```
'{"rate":"10", "fv": 1000, "pv": -100}'
```

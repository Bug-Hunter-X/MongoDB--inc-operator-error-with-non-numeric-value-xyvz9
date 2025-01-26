# MongoDB $inc Operator Error with Non-numeric Value

This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numeric field by a specified value.  Attempting to increment a field with a non-numeric value will result in an error.

## Bug

The bug is caused by providing a non-numeric value (in this case, a string 'abc') to the `$inc` operator.  MongoDB expects a numeric value for the increment.

## Solution

The solution involves ensuring that the value provided to the `$inc` operator is always a valid number.
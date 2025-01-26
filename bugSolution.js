```javascript
// Correct usage of $inc operator.
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: 1 } });
// Or to use a variable
let incrementValue = 10;
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: incrementValue } });
```
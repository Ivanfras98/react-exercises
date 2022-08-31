export function Sum({numbers}) {
    let mystyle = {
        color : "red"
    }
    let summ = 0
    numbers.forEach(element => {
        summ += element
    });
  return <h1 style={mystyle}>The sum of the numbers in the array is : {summ}</h1>;
}

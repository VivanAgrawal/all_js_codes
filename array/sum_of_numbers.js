let num=prompt("enter numbers comma seperated:").split(',')
//let num=[1,2,3]
let sum=0
for(let i=0;i<num.length;i++){
    sum+=Number(num[i])
}
alert("the sum of numbers is:"+sum)


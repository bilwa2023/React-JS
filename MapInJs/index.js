const nums=[5,2,3,7,4,10];

// function binary(x){
//     return x.toString(2);
// }

// const tnum=nums.map(binary);

const tnum=nums.map(function binary(x){
    return x.toString(2);
})

console.log(tnum);

//Filter()

const fnum=nums.filter(x=>x%2!=0)
console.log(fnum);

const big=nums.filter(function greaterthan4(x){
    if(x>4)
        return true;

});

console.log(big);

//reduce()

const value=nums.reduce(function(acc,curr){
    sub=acc-curr;
    return sub;
})

console.log(value);

//Max value using reduce()
const maxVal=nums.reduce(function(max,curr){
    if (curr>max)
        max=curr;
    return max;
},0)

console.log(maxVal);


const roomies=[
    {firstName:'Bilwa',lastName:'Biswal',age:'25'},
    {firstName:'Mahesh',lastName:'Thotapally',age:'21'},
    {firstName:'Manish',lastName:'Kumar',age:'23'},
    {firstName:'Arbaz',lastName:'Shaik',age:'24'}
]
//Array of fullname
const fulnames=roomies.map(function(x){
    return x.firstName+ " "+ x.lastName
})

console.log(fulnames);

//Count of unique ages
const ages=roomies.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=acc[curr.age]++
    }
    else
        acc[curr.age]=1
    return acc
},{})

console.log(ages);


// Age<24 and their firsName by using reduce(){}

const result=roomies.reduce(function (acc,curr){
    if(curr.age<24){
        acc.push(curr.firstName)
    }
    return acc;
},[])

console.log(result);

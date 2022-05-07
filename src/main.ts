const obj:{name:string,age:number,address?:string}={
    name: 'Minh',
    age: 20,
    address: 'Minh',
}
let arr:number[]=[2,3,4,5,6,7,8,9,10,11];
let data:(string|number)[] =["minh",2,3,3,5,6,78];
let data2:(string|number|boolean)[] =["minh",2,true,true,true,true,true,true,true,true,];
let data3:{
    name: string,
    age: number,
    address: string,
}[]=[
    {
        name: 'Minh',
        age: 20,
        address: 'Minh',
    },
    {
        name: 'Minh',
        age: 21,
        address: 'Minh',
    }
]

interface obj {
    name: string,
    age: number,
    address: string,
}
let objData:obj={name: 'Minh', age: 20, address: 'Minh'}
console.log(objData);
// Hàm có giá trị trả về
const A = (sum1:number, sum2:number):number =>{
    return sum1 + sum2;
}
// Hàm không có giá trị trả về
const B = (sum1:number, sum2:number):void =>{
    console.log(sum1);
}
// Generic Type
const C = <Type> (a:Type)=>{
    return a; 
}
C<number>(2);



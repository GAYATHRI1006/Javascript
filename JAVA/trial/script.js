arr=["ram","muruga"]
arr.forEach(element => {
    console.log(element.toUpperCase())});
console.log(arr)
arr.forEach((val,index,arr)=>{
    arr[index]=val.toUpperCase()
})
console.log(arr)
arr=['ece','it','cse','eee']
// arr.forEach(val => {
//     const add=document.createElement('option')
//     add.textContent=val
//     add.value=val
//     document.getElementById('branch').appendChild(add)
// })
for(i=0;i<arr.length;i++){
    const add=document.createElement('option')
    const val=arr[i]
    add.textContent=val
    add.value=val
    document.getElementById('branch').appendChild(add)

}
arr=['ece','cse','it','eee']
arr.forEach(val => {
    const add=document.createElement('li')
    add.textContent=val
    document.getElementById('dept').appendChild(add)

})
let array=[98,78,56]

array.forEach((val)=>{


    console.log(val*83)
})
let usd=array.map(x=>x*83)
console.log(usd)
const input=[{nam:'ram',age:22},
    {nam:'ram',age:22},{nam:'ram',age:22}
,{nam:'ram',age:23}]
const ages= input.map(x=>x.age)
console.log(ages)
let cost=[35,45,342,56,789,432,90]
let red= cost.filter(x=>x>100)
console.log(red)
let cart=cost.reduce((total,el)=>total*el,1)
console.log(cart)
arry=[
    ['a','b','c'],['c','d','f'],['d','e','f']
]
let count=arry.flat().reduce(
    (accumulator,curr)=>{
        if(accumulator[curr])
            accumulator[curr]++
        else
            accumulator[curr]=1
        return accumulator
    },{})

console.log(count)
arrays=[4,6,2,3,1,1,3,5,7,8,4,3]
let dup=arrays.reduce((accum,val)=>{
    if(!accum.includes(val)){
        accum.push(val)
    }
   return accum
},[])
console.log(dup)
let names="Ram ALbert Son"

let abb=names.split(' ').reduce((accum,val)=>
{
    return accum+val[0]
},"")
console.log(abb)
let a=100
function outer(name){
    let val='bred'
    
    function inner(){
        let inval='butt'
        console.log(inval)
        console.log(val,name)
    }
    return inner
}
let call=outer('ram')
call()
let call2=outer('sh')
call2()
function ader(x){
    return function(y){
        return x+y
    }
}
let ad=ader(5)
console.log(ad(6))
console.log(ad(8))
let sub=ader(8)
console.log(sub(19))
let c=100

let b=c
b=300
console.log('a',c)
console.log('b',b)
let obj={nam:'ram',age:23}
let ob=obj
obj.age=98
console.log('ob1',obj)
console.log('ob2',ob)
let ar=[1,2,3,4,5,1,2,3,4,5]
let set= new Set(ar)
console.log(set)
let set1= new Set()
set1.add(4)
set1.add(5)
set1.add('p')
set1.add(4)
console.log(set1)
console.log(set1.has(4))
console.log(set1.size)
console.log(set1.delete(2)
)
let arr1=Array.from(set1)
console.log(arr1)
console.clear()
let map1=new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('c',3)
map1.set('d',4)
for(let i of map1){
    console.log(i)
}
for(let k of map1.keys()){
    console.log(k)
}
map1.forEach((v,k) => {
    console.log('key',k,'val',v)
})
let ab=[['a',1],['b',2]]
let map2=new Map(ab)
console.log(map2)





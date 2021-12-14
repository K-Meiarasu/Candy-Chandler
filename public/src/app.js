var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];
function addChocolates(chocolates,color,count)
{
    for(let i=0;i<count;i++)
    {
        chocolates.splice(0,0,color);
    }
    return chocolates;  
}
function removeChocolates(chocolates,count)
{
    var c1=chocolates.slice(count,chocolates.length);
    chocolates=c1;
    return chocolates;
}
function dispenseChocolates(chocolates,n)
{
    var modify=[]
    for(let i=chocolates.length-n,j=0;i<chocolates.length;i++,j++)
    {
        modify[j]=chocolates[i]
    }
    return modify
}
function dispenseChocolatesOfColor(chocolates,count,color)
{
    var modified=[]
    for(let i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color && count!=0)
        {
            modified.push(chocolates[i])
            chocolates.splice(i,1)
            count--
        }
    }
    return modified
}
function noOfChocolates(chocolates)
{
    var  num=[];
    var array=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];
    for(let i=0;i<array.length;i++)
    {
       
        var count=0;
        for(let j=0;j<chocolates.length;j++)
        {
            if(array[i]==chocolates[j])
            {
                count++;
            }
        }
        num.push(count);
    }
    return num;
}
function changeChocolateColor(chocolates,n,color,finalColor){
    for(let i=0;i<n;i++){
             chocolates[chocolates.indexOf(color)]=finalColor;
    }
    return chocolates;
}
function changeChocolateColorAllofxCount(chocolates,finalColor,color)
{
    var count=0
    for(let i=chocolates.length-1;i>=0;i--)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor
            count++
        }
    }
    return [chocolates,count]
}

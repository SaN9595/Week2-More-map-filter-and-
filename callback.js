function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    if(startIndex<stopIndex && (startIndex!=0 && stopIndex!=0))
    {
        for(j=0,i=startIndex;i<stopIndex;j++,i++)
        numbers[j]=i;
    }
    for(i=0;i<numbers.length;i++)
    {
        if(i%3==0)
        {
            threeCallback();
        }
        if(i%5==0)
        {
            fiveCallback();
        }
    }
  }
  function saysThree()
  {
      console.log("three");
  }
  function sayFive(){
      console.log("five");
      
  }
  threeFive(10, 15, saysThree, sayFive);

//2.6
const flattenedArr=[];
const arr2d = [[1, 2], [3, 4], [5, 6]];
index=0;
for(i=0;i<arr2d.length;i++)
{
    for(j=0;j<arr2d[i].length;j++)
    {   
        flattenedArr[index]=arr2d[i][j];
        index++;
    }
}
for(i=0;i<flattenedArr.length;i++)
console.log(flattenedArr[i]);


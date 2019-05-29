
const myNumbers = [1, 2, 3, 4];
const oddNumber = myNambers.filter(number => number % 2 !==0).map (number => number *2);
console.log(oddNumber);

//Map the tasks to durations in hours.
//Filter out everything that took less than two hours (i.e., remove from the collection)
//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
//Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. durations. For a single item, use a singular form, e.g. duration. For details, see Naming Conventions.
//Don't forget to use =>.


// More Map and Filter
const monday = [
    {
      name: "Write a summary HTML/CSS",
      duration: 180
    },
    {
      name: "Some web development",
      duration: 120
    },
    {
      name: "Fix homework for class10",
      duration: 20
    },
    {
      name: "Talk to a lot of people",
      duration: 200
    }
  ];
  
  const tuesday = [
    {
      name: "Keep writing summary",
      duration: 240
    },
    {
      name: "Some more web development",
      duration: 180
    },
    {
      name: "Staring out the window",
      duration: 10
    },
    {
      name: "Talk to a lot of people",
      duration: 200
    },
    {
      name: "Look at application assignments new students",
      duration: 40
    }
  ];
  
  //Another Function Way

  //function calCost(arr)
 // {
 //   let value=0;
 //   arr.forEach(element => {
//          value+=element.duration;    
 //   });
  //  return value;
//}
//let mondayCost=calCost(monday);
//let tuesdayCost=calCost(tuesday);

//console.log(mondayCost + tuesdayCost);


  const task = [...monday, ...tuesday];
  const rate = 20;
  const taskInHour = tasks
    .map(i => i.duration / 60)
    .filter(i => i >= 2)
    .map(i => i * rate)
    .reduce((total, value) => total + value)
    .toFixed(2);
  
  console.log(`€ ${tasksInHour}`);
  




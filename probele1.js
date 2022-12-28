var input = require("fs").readFileSync("input", "utf8");
var lines = input.split("\n");

const len = parseInt(lines[0]);


const count = (props) => {
  // 2,5,5,4,5,5,3,6,5,6
  const arr = [
    {
      name: "1",
      value: 2,
    },
    {
      name: "2",
      value: 5,
    },
    {
      name: "3",
      value: 5,
    },
    {
      name: "4",
      value: 4,
    },
    {
      name: "5",
      value: 5,
    },
    {
      name: "6",
      value: 6,
    },
    {
      name: "7",
      value: 3,
    },
    {
      name: "8",
      value: 7,
    },
    {
      name: "9",
      value: 6,
    },
    {
      name: "0",
      value: 6,
    },
  ];

  let sum = 0;

  for (let i = 0; i < props.length; i++) {
    arr.forEach((el,idx)=>{
    if(el.name == props[i]){
        sum = sum + el.value;
    }
  })
  }
  return sum;
}


for (let index = 1; index <= len; index++) {
    console.log(count(lines[index]).toString(),'leds');
}


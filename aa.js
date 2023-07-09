const objarray = [
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
];

// 실행결과
// v-for 지시자는  {text: 'One', value: 'A'}
// v-for 지시자는  {text: 'Two', value: 'B'}
// v-for 지시자는  {text: 'Three', value: 'C'}
for (const i in objarray) {
  console.log('v-for 지시자는 ', objarray[i]);
}

for (const i of objarray) {
  console.log('v-for 지시자는 ', i);
}

// i === {text, value}
for (const {text, value} of objarray) {
  console.log('v-for 지시자는 ', text, value);
}

debugger;
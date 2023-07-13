const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];



                //EXERCISE 1
//1,2
let arr = [];
let array = ["a","b","c","d","e"];
//3
console.log(array.length);//5
//4
console.log(array[0],array[2],array[array.length-1]);
//5
let mixedDataTypes = [2,5,'abc',true,{
    name:"azan"
}];
console.log(mixedDataTypes.length);
//6,7
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log(itCompanies[0],itCompanies[itCompanies.length/2 - 0.5],itCompanies[itCompanies.length-1]);
//10
let i = 0;
itCompanies.forEach(()=>{
  console.log(itCompanies[i]);
  i++
});
//11
i=0;

itCompanies.forEach(()=>{
  let element = itCompanies[i];
  let upperCaseElement = element.toString().toUpperCase();
  console.log(upperCaseElement);
  i++
});
//12
console.log(`${itCompanies} are bigIT companies`)
//13
let newCompany = "IBM";
if (itCompanies.includes(newCompany)){
  console.log(`${newCompany} is found in IT Companies`);
} else {
 console.log("Company not Found");
};
//14
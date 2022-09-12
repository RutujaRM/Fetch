import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Fetch!</h1>

`;

/*Fetch :- It's Function use to get value/data from somwhere or another place
  
Syntax :- fetch("URL")

In this we get Promises so,if promise is resolve (execute) for that we use "then"
*/

const a = fetch("https://jsonplaceholder.typicode.com/users");
console.log(a); //we get Promise(means it's executed at last)

// If it's Resolve then all data of URL is visible so,we can pass "a" as parameter to hold that data
a.then((data) => {
  console.log(data); //this data variable holds all data of URL

  //from this all data to get only "text" we use text() function
  const text = data.text(); //we get Promise here
  console.log(text);

  text.then(
    (
      txt //This promise is resolve so we get text data
    ) => {
      console.log(txt);
    }
  );
});

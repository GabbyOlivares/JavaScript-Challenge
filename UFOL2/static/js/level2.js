// from data.js
var tableData = data;

//table references
var tbody = d3.select("tbody");

// Building Functions for the table. Create table structure
// and space where info will be hold
  // Build the table
function buildTable(data) {
  // Clean out everything at every query
  tbody.html("");

  // Loops
    // Create a function and use d3 to append a new row for each
    // data object. dataRow is the name for each Object data set 
    //-Data loop-
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    // Extract each Object data in arrays. -Table Cell Loop-
    // Object data will be introduced into each new row
    // Loop for each one of the entries. 
    // entries will always generate 2 array properties> key, value. 
    // forEach will create a list of keys and values of my Objects
    // var cell will receive the dat values as table data "td"
    // By now my td's ARE EMPTY, no info received yet!
    // cell.text introduces the data  or data values
    Object.entries(dataRow).forEach(([key,value]) => {
      var cell = row.append("td");
        cell.text(value);
      }
    );
  });
}
 
// Create the event listener to receive data user input
var input = d3.select("input");
userinput = {}

// ENTER submit function
function handleClick() {

  // Date and Time
  var query = d3.select(this).select("input");
  var queryid = query.attr("id")
  var queryval = query.property("value")
  userinput[queryid] = queryval

  console.log(userinput)

  let filterData = tableData;

  // Filter the filterData array. 
  // Filter an object from filter Data array. 
  // Each object has a key, and will bring the value of the key I type when it matches 
  Object.entries(userinput).forEach(function([key,value]){
      filterData= filterData.filter(d => d[key] === value); 
      console.log(filterData);
  });

 
  buildTable(filterData);
}

// Filter with ENTER tab press
d3.selectAll(".filter").on("change", handleClick);

// Click Reset Button -can use fuction with or without true-
// the difference is without true, updates from cache
// with true refresh from server
// function resetButton(){
//   location.reload();
// }
function resetButton(){
  location.reload(true);
}

// Filter with ENTER tab press
d3.selectAll("#reset-btn").on("change", handleClick);

// Build Table
buildTable(tableData);

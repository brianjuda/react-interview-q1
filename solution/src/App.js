import './App.css';
import {isNameValid, getLocations} from './mock-api/apis.js';

{/**instatiate empty location array */}
let locations = []
{/**fill in array calling getLocations api and assigning resolved promise data into locations array */}
getLocations().then(location => {
  locations = location
})

{/**boolean checker for name validation */}
let nameCheck = true

{/** function call to update name validation boolean */}
function NameError(input) {
  isNameValid(input).then(value => {
    if(!value){
      nameCheck = false
    }
  })
}

{/** render error message if boolean is false, otherwise leave empty */}
function DisplayErrorMessage() {
  let errorMessage = ''
  if(!nameCheck) {
    errorMessage = 'this name has already been taken'
  }
  return (
    <div className="nameErrorMessage">
      <p>
        {errorMessage}
      </p>
    </div>
  );
}

{/** render name inputs and attach event handler to call valid name api */}
function NameInput() {
  return (
    <div className="nameInput">
      <label for="name">Name
        <input id="name" onChange={e => NameError(e.target.value)}></input>
      </label>
      <DisplayErrorMessage />
    </div>
      
  );
}

{/*render dropdown component */}
function LocationDropdown() {
  {/**map locations into fresh array to populate dropdown */}
  let locationPlaces = locations.map(loc => <option value={loc} key={loc}>{loc}</option>)

  return (
    <div className="location">
      <label for="location">Location
        <select id="location">
          {locationPlaces}
        </select>
      </label>
    </div>
  );
}

{/*render CTAs for form, not hooked up for form capture as not listed in requirements */}
function FormCTAs() {
  return (
    <div className="formCTAs">
      <button>Clear</button>
      <button>Add</button>
    </div>
  );
}

{/*Basic table for display, no requirements to hook up and update table with user entered data */}
function DataDisplay() {
  return (
    <div className="dataTable">
      <table>
        {/*hidden caption name for screen reader acessibility*/}
        <caption>Name and Location Data</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

{/** react rendering function */}
export default function App() {
  return (
    <div className="app">
      <NameInput />
      <LocationDropdown />
      <FormCTAs />
      <DataDisplay />
    </div>
  );
}

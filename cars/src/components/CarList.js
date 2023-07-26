//3.A))
import { useSelector ,useDispatch} from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
//This is a classic case of trying to get access some data from our Redux store.
//And so we're going to use that same accessing state flow at the very top.
//Let's import.useSelector.From React Redux.And then at the top of the component.
//My intent here is to get the list of cars and assign it to a variable called cars.
//So I'm going to call you selector put in my selector function.This will be called with the big state object.
//And now I'm going to show you the code we need to make this work.And then we're going to discuss why it looks so weird.
//And as we see why this is going to look so weird, this is kind of going back to something I mentioned a little bit ago where there's a little bit of an issue inside of our Redux store right now.
//And it's not a bug per se.It's just something that is a little bit awkward and it's something that comes up fairly frequently on Redux Toolkit Projects.
//So I wanted you to see this kind of awkward thing and just be aware of it. Okay, so here is the code.
    const {cars,name} = useSelector(({form , cars :{data,searchTerm}})=>{
//The data that we actually care about or the pieces of state are state cars, search term and state cars data So if we write out state cars, data and state cars search term all over the place, it would be really hard to read what is going on inside this function
//So a very common pattern you're going to see inside these use selector functions is to use a little bit of de structuring on this argument and only pull out the properties we really care about
//So in this case, I'm going to put in a set of curly braces And then cars A colon Another set of curly braces And data and search term
//Then inside of the selector function itself I'm going to replace state cars data with data dot filter We're going to look at every individual car
//And I want to return true meaning.We want to keep this car and return it inside of a new array.
//If the car has a name, that includes the search term, so I'm going to put in car name to lower case.Then DOT includes a search term dot to lower case.
//I'm going to save that.There we go
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
//So if the car has a name of Subaru that includes the letters SU.So I would want to show that car on the screen.
//Now, as we implement this searching logic, we're not actually creating a new piece of state.Instead, we are kind of creating a new value.
//The filtered list of cars and is going to change over time depending upon what the data piece state is and what the search term piece of state is.
//So this is a classic example of derived state.We are taking two existing pieces of state or doing a calculation on them.
//They're giving us a new piece of state which we might call filtered cars or something like that.And then we're going to use this derive state inside of a component.
//We're going to show some content on the screen based upon this thing right here.Whenever we are calculating drived state..
        return{
          cars:filteredCars,
          name:form.name
        }
//So if we go back over to our editor and find car listings, remember car List is responsible for showing the list of cars.
//So if we update the use selector function right here, we can put all of our searching or filtering logic directly inside of here so that when we eventually return the list of cars, we can already have this thing be filtered.
//This can be the filtered list right here.And so everything else inside the component will just work with the filtered list.
//They won't even know everything else inside this component, won't even know that other cars exist.They've already been filtered out before they ever got into the component itself.
//So in short, we're going to write our filtering logic out right here pretty much.Okay, so let's get to it.
//Now, first thing I want to do a little bit of a refactor here.The data that we actually care about or the pieces of state are state cars, search term and state cars data.
    });

  const handleCarDelete=(car)=>{
        //assumption
        //  action.payload=== the id of the car we want to remove

//We want to update our state.So we need to make sure that we dispatch a action object.
//In this case, the action we want to dispatch can be found back inside of indexed JS inside the store directory.
//So remember we defined remove car.That is our action creator.Whenever we dispatch the action that comes back from calling remove car.
//Let's open up car slice really quick.Here's car slice.So here is the reducer function that is going to run.
//And yet again, remember we made this huge assumption
//We assumed that when we received this action object, it was going to have a payload of the ID of the car that we want to remove
//So back inside of car listWhen we call dispatch instead of here and we dispatch an object, we must make sure that action object has a payload of this car's ID
//To change our state, we're going to go through that exact same flow yet again We're going to first import use dispatch at the top
//I will then get access to the dispatch functionInside of the event handler We're going to call dispatch
dispatch(removeCar(car.id));
  };

  const renderedCars= cars.map((car)=>{
    const  bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return(
        <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
            {car.name}-${car.cost}
        </p>
        <button className="button is-danger" onClick={()=>handleCarDelete(car)}>Delete</button>
        </div>
    )
  });
  return (
    <div className="car-list">
    {renderedCars}
    <hr/>
  </div>
  )
}

export default CarList;
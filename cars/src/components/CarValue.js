//3.C
import { useSelector } from "react-redux";
//So as a reminder, this is going to show the total value of all the currently displayed cars.And that means that if I search for something.And say Subaru gets hidden.
//I should go down to a total value now of 15,000.And if I remove the search term and both cars come back, I should see total value updated.
//And that means that to calculate the total value, we pretty much are going to have to write out the exact same filtering or searching logic that we've already placed inside the car list component.
//So there could be an opportunity for code reuse there, but we'll have to take a look at it and decide whether or not we should investigate that further.
//Right now, let's just make sure that we can show the total value of all the currently displayed cars.So we've got a component already created for this.
//It is the car value component.So here is car value X right here.Inside of here.
//I'm going to give the div a class name of car dash value.I'm going to open up the div a little bit.
//I'm going to change the text to say total value or, you know, we've really been calling this cost.It's all put in text of total cost instead.
//And then dollar sign, curly brace, total cost.And again, this is not template string syntax right here.
//I really just want to show a dollar sign and then to refer to a JavaScript variable in JSX, we have to put in a set of curly braces.
//So we need to get a variable inside of here called total cost.And that needs to be a variable that contains the total cost of all the cars that are currently displayed on the screen.
//So to figure out what cars are currently displayed on the screen, we need to access our state.

function CarValue() {
//We need to get access to a list of cars.We need to get access to.Whether the current search term is we need to do the same kind of filtering logic.
//But this time, instead of returning a list of all cars, we need to take a look at the filtered list of cars and sum up the cost of all of them.
//To begin at the very top, I'm going to import.useSelector.From React Redux.I'll then declare total cost.That's going to useSelector.
//And again, we don't need the entire big state object.We only care about a couple of properties out of it.So we're going to again, do a little bit of restructuring right here.
//I'm going to put in some curly braces.I'm going to say a look at the cars piece of state and out of that entire big thing, give me just the list of cars, which is data and search term.
//Then inside of here, we're going to start off by getting the filtered list of cars again.So I'll say const filtered cars.
//And that's going to be data filter.And then the same kind of logic we just wrote out.And again, we'll try to figure out if there is an opportunity for code reuse here.
   const totalCost = useSelector(({cars:{data,searchTerm}})=>{
  const filteredCars = data.filter((car)=>{
//So for every car I want to return true if its lowercase name includes the lowercase of search term.So I'm going to return car name to lowercase includes search term to lower case.
//And then out of this filtered list of cars, we want to take a look at all these different cars costs and some them all up into one single number.
//We can definitely do that using a for loop.So we could say let cost starts off at zero.And then for.Let car of filtered cars.Cost plus equals car cost and then return the calculated cost.
//So now down at the bottom, right, if I have two cars right here, both are $1,000.I see 2000.And if I do a search, the total cost updates as well.
//So, again, this definitely works, but there's a little bit better way, a little bit more JavaScript way to write out the kind of some logic right here.
//So it's to use a reduce function instead.A reduced function is not unlike the reducer functions we've been taking a look at.I'm not going to go too into detail on how reduced functions work.    
    return car.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  let cost = 0;
  for(let car of filteredCars){
  cost += car.cost
  }
  return cost;
   }); 
//Otherwise, stick around and we'll take a look at it.So a little bit more JavaScript way to write this out would be return filtered.Cars not reduce.
//And then we're going to get an accumulator.And a car.And then we're going to have an initial value for our accumulator of zero.And then inside the function I will return accumulator plus car forecast.
//And I've got a typo here in filtered.There we go.That's better.So this is a reduced function right here.We can simplify this a little bit by removing the return keyword and the curly braces.
//And we could actually reduce this or I should say reduce.I'm just reading that word right there.We can simplify it even a little bit more by cutting just the reduced parts.
//Pasting it on right after the end of filter.And then returning this value directly instead of assigning it to a temporary variable.
//So we'll end up with something like this and even a little bit more simplification.We could remove these curly braces and the return keyword and the semicolon at the end of that line.
//And if we want to go even further, we can remove that return keyword.Those wrapping curly braces.And that semicolon right there.
//So I think that's about as simplified as we're going to get right now.So now, one last test here.I'll put in Ford.Subaru.
//And if I search for Ford?If I search for Subaru.Yep, it worksSo let's say that's looking pretty good.

    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>

}

export default CarValue;
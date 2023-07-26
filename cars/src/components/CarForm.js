//3)----
//store ke index.js me se yaha aayega change name jo bhi nayi value jayengi wo yaha k change functions se jayengi
//name or cost me jo changes honge wo yahi banaye gaye functions me se honge jese handlenamechange , handlecostchange or name or cost jo add hue hai addcar ke through wo bhi yahi se show honge name,cost se

import { useDispatch, useSelector } from "react-redux";
import {changeName,changeCost,addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();
  const {name,cost}= useSelector((state)=>{//jo current state me name or cost hogi wo yaha pe lenge and show krenge carform me after dispatching
    return {
        name:state.form.name,
        cost:state.form.cost
//Not really awkward because of Redux toolkit itself, but because how we frequently use it and how we think about these slices that we are creating.
//So let me tell you give you a little bit of backstory here.Help you understand why we are writing out that weird code.
//So remember, inside of our store, we get this one big state object.This big state object is going to have a couple of keys that are determined when we create our store initially by calling configure store.
//So because we call to configure store and we put in this reducer object that had keys of form and cars,well, that meant that our state object was going to have keys of form and cars.
//And then for the car's property in particular, the set of values or the values for that key are going
//to come from the combined reducer for the car's slice.
    }
  });
//Remember what we said just a moment ago?Just about every single one of our reducer functions expects to receive a payload.
//So whatever we put into change name right here, that's going to be our payload.That's going to be what we communicate to our little micro reducer function.
//So for us, if we go back to our form slice.Here's change name right here.
//Whatever we provide as a payload is going to be used as the new name piece of state.So the new value that we want to assign to our name piece of state is going to be event target value.
//That's what a user just typed into that little text input.
//So event.target.value.And that should be it.
   const handleNameChange=(event)=>{
    //event.target.value
    dispatch(changeName(event.target.value));}
  const handleCostChange = (event) =>{
   const carCost = parseInt(event.target.value) || 0
   dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
//And as a further reminder, if we open up carsslice inside these slices directory, remember, once again, we made this huge assumption.
//We had assumed that any time that we dispatch an action with the intent of running this little reducer right here, the payload property should be an object that has a name and a cost.
//Okay, so back inside of car form to get started up at the very top.
    dispatch(addCar({name:name,cost:cost}));//ye name or cost ko dispatch krke show krega jo aara h carsSlice se 
    //We will call add car.And when we call this action creator, we need a payload property that is an object.
    //So we're going to pass in to the action crater, an object that's going to have the current name.
    //And that's going to be the name piece of state that we had accessed back up right here.And it needs to have a cost.
    //That's going to be the cost piece of state which we had accessed right there.
    //And because these keys and values are identical, we can shorten this to just name and cost stilt the set of curly braces around it.
    //Okay, let's save this.And now, as usual, unfortunately, although we can submit the form, we're not really going to see anything happen just yet.
    //So in theory, we are adding in a new car to our list of cars, but we don't actually have any components that's making use of the state just yet.
    //So hopefully it's working, but well, we just don't know just yet. Okay, so this is looking pretty good
  }
    return <div className="car-form-panel">
          <h4 className="subtitle is-3">Add Car</h4>
          <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                <label className="label">Name</label>
                <input
                className="input is-expanded"
               value={name}
               onChange={handleNameChange}
               />
                </div>
                <div className="field">
{/*So in order to get this cost variable.We need to import, import or better yet, update the selector function we already put together.
So we've already got a selector function in here.We are already making use of use selector in addition to getting access to the name peace of state.
However, we now want to also get access to the cost piece of state.So we're going to change the structure of what we return.
Instead of returning one single number, we're going to return an object instead.And this object is going to contain both the name and the cost.
So we will get a name coming from state form name and cost coming from state form cost.So now being returned from use selector, we're not just getting the name anymore.
We're getting an object that looks like this.So we're going to de structure out.The name and the cost from that object that is being returned.
Okay, let's try saving this.*/}

                <label className="label">Cost</label>
                <input
                className="input is-expanded"
               value={cost || ''}
               onChange={handleCostChange}
               />
                </div>
            </div>
            <div>
                <div className="field">
                    <button className="button is-link">Submit</button>

                </div>
            </div>
          </form>
    </div>

}

export default CarForm;
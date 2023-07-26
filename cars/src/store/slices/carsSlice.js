//1)------

//Well, again, we're going to have two slices.Each one is going to have the state that you see along with some of these different mini reducer functions.
//So let's get started on creating these two slices right away.


//First, we're going to identify what state exists inside of our entire application.So what are all the different things that are going to change over time?
//We're then going to identify exactly how that state is changing.So what is a user actually doing that results in some state changing?
//We're then going to group together common pieces of state, and for each of these different groups we're going to create a slice to manage that individual group.
//You'll notice that some of these steps look rather similar to that entire state design process.We had gone over much earlier on inside the course.
//And yeah, that's kind of the point.

import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
//remember three different properties we provide .We must give a name which will be form
//We must provide an initial state So this time around, our initial state is going to be an object because form slice is going to keep track of two separate properties
//It's going to keep track of a name and a cost .So we need to store both those inside of this object right here so I can have a name that starts off as an empty string and it cost that starts off as zero.
//I'll need to find my different reducers And again, remember, there is an S on here. Reducers.    
    name: 'cars',
//And as we've kind of arrived at in the last video, we're going to have two different ways of changing these pieces of state.
    initialState: {
        searchTerm: '',//state jisse search krenge
        data: []//state jisse cars ko add ya remove krenge 
//That array, that list of cars is accessible as state cars.That is the array.And we want to mutate that we want to add in a brand new car.
//So to mutate this array, to add in a new car to the very end we would call state cars push and we want to push in a brand new object that's going to represent the new car.
//This new car, this is where it gets a little bit trickier.It's supposed to have a name and a cost.
//So the reason this is a little bit tricky is that, remember, our form size knows what the name and the cost is supposed to be.
//this slice over here maintains that state.

    },
    reducers: {//mini reducersn or micro reducer functions
//So inside of the car slice file, the piece of state that we're going to be updating is search term.And the mini reducer function right here is called change search term.
//So whenever a user changes the text input, we want to dispatch an action that's going to try to run this thing right here.
//And we should have already exported, yet we did the appropriate action creator down at the bottom of the file as well.
//All right, let's get to it.
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
//So we now have one of these micro reducer functions, ad car, that kind of needs to get access to that state right there that is being maintained by this other slice.
//But remember, this is not allowed.One slice has absolutely no visibility into the state that is maintained by another slice.
//We can't directly look over there.No way.It just can't happen.
        addCar(state, action) {
            //asumption:
            //action.payload==={ name:'ab',cost: 140  }
//So instead, we're going to once again make one of these a really big assumptions.
//We're going to assume that whenever we call add car, the actions, payload property is going to be an object that is going to contain the name and the cost of the car that we want to add.
//So the code that we need here is going to look like this.It's going to be name is action dot payload, dot name.
//And cost will be action payload cost.I'm going to add in a comment up here, just to remind myself, I'm going to put in assumption.
//Action payload is going to look something like this.It's going to be an object that has a name, that is going to be some string and a cost that is going to be some cost.
//So whenever we try to dispatch an action of AED car with a hope of running this mini reducer function right here, you and I have a huge responsibility in us, or I should say on us.
//We need to make sure that when we dispatch that action, we provide a payload that looks like that right there.
            state.data.push({
                name: action.payload.name,//jo car name input m add krenge
                cost: action.payload.cost,//jo car cost input m dalenge
                id: nanoid()
            })
        },
        removeCar(state, action) {
            //assumption
            //  action.payload=== the id of the car we want to remove

//So it's going to be whatever that ID was right there for the car we're trying to delete.
//Again, this is pretty much the entire purpose we were adding in the ID.So whenever a user clicks on that delete car button, we know exactly what car the user is trying to delete.
//To actually remove the car.We can do a simple filter operation over our existing list of cars.
//We can then assign the newly filtered array back to the car's piece of state.So I'm going to say.
//Const updated.So I'm just going to make a temporary variable right here just for clarity.
//This will be state cars.I'm going to filter.I'm going to put in a filter function.
//And for every car.I want to return.True.Which means I want to keep this car.
//If its ID is not equal to the payload ID that is coming in.So I want to return car ID not equal to.Action dot payload.
//So that's going to give me an updated list of cars.I'm going to take that and assign it to the state cars property Like so.And that's it.
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            });
            state.data = updated;
        },
    },
});

export const {
    changeSearchTerm, addCar, removeCar
} = carsSlice.actions;//actions equals what value is already in there
export const carsReducer = carsSlice.reducer;//reducer is required for changing or updatim=ng the already present value
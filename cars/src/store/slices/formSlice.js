//1)----

//Well, again, we're going to have two slices.Each one is going to have the state that you see along with some of these different mini reducer functions.
//So let's get started on creating these two slices right away.

import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';
const formSlice = createSlice({
//remember three different properties we provide .We must give a name which will be form
//We must provide an initial state So this time around, our initial state is going to be an object because form slice is going to keep track of two separate properties
//It's going to keep track of a name and a cost .So we need to store both those inside of this object right here so I can have a name that starts off as an empty string and it cost that starts off as zero.
//I'll need to find my different reducers And again, remember, there is an S on here. Reducers.
    name: 'form',
//And as we've kind of arrived at in the last video, we're going to have two different ways of changing these pieces of state.
    initialState: {
        //We can either change the name or we can change the cost.
        name: '',
        cost: 0,
    },
//So I'm going to have two different mini reducer functions.One is going to be changed name.
//And the other will be change cost. So whenever we try to change the name or change the cost, we need to know what the new name is going to be and we need to know what the new cost is going to be.
//So that means that whenever we are going to update our name or our cost piece of state, we have to make a mental note.
//We have to remember if we want to update our name or the cost, we need to dispatch an action that has a payload property.    
reducers: {
        changeName(state, action) {
            state.name = action.payload;//name change hoga input m jo likhenge usse
        },
        changeCost(state, action) {
            state.cost = action.payload;//name change hoga input m jo likhenge usse
        }
    },
    extraReducers(builder){
        builder.addCase(addCar,(state,action)=>{
            state.name = '';
            state.cost = 0;
        })
    }
});
//At the very bottom, we exported an action creator function called Change name.
//Whenever we call that thing, if we pass in an argument, we're going to get back in action object that is going to have a type and a payload of whatever we passed to that function.
//So remember, this is our action creator.It is an extremely simple function that just gives us back an action object with the appropriate type.
//So inside of car form at the top we will import change name from up one directory store. Then onto step number five.

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;

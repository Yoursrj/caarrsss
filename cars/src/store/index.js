//2)-----

//Okay, So now last step, step number four, for each of these groups, we're going to create a slice.
//So we are going to have one slice related to adding cars and one slice related to the process of listing out or displaying all the different cars.
//And then to each of the different slices that we're going to make.So we'll say slice number one and slice number two.
//We're going to take all these different ways of changing state.And as you probably guess, we're going to assign them to either slice one or slice two.
//And I think you could guess how we're going to do that.I think it's probably going to be something like this.So that's it.That is our redux design.
//We're going to end up with two slices(multiple slices).We'll figure out some appropriate names for them in just a second.
//Each is going to have two pieces of state and each of them is going to have a handful of different mini reducer functions.
//That Redux Toolkit is going to automatically kind of synthesize together into that combined reducer.

import { configureStore } from "@reduxjs/toolkit";
//We have created our two slices.It's the last thing we have to do.Related to Redux right now is create a brand new store.
//We need to wire up these slices to it, or specifically the combined reducers that they generate.And then we need to export all the different action creators that some of our components need to make use of.

//slicing k baad yaha aakar rahenge changeName,changeCost aare milke rhenge
//yaha aake ikhatta rahenge saare or yaha se export honge components mein
import {carsReducer
,addCar,
removeCar,
changeSearchTerm
} from './slices/carsSlice';

import {
    changeName,
    changeCost,
    formReducer
} from './slices/formSlice';

const store = configureStore({
    reducer:{
        cars:carsReducer,
        form:formReducer
    }
});
//Then at the bottom I'm going to export my store along with all of these different action creator functions ...
//So I can make use of these different action craters from my different components without having to import directly from the slices themselves at the very bottom, we're going to add in a really big export statement
//So exports Curly braces store.Change name , Change cost ,Add car and move car change search term
//So add car , Remove car change Search term that's it for index.js
//It's now the last step of the redux set up right now in order to actually connect the Redux side to the React side of our projects
//Remember, we only have to do this one time per project inside of our indexed JS file We're going to import that provider from React Redux and we're going to import the store that we just created
//So inside of our indexed JS file, I will import provider from React Redux.And store There we go

export{
    store,changeName,changeCost,addCar,removeCar,changeSearchTerm
}
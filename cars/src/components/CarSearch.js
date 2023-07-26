//3.B
import { useDispatch, useSelector } from "react-redux";
//We also need to make sure that we retrieve the search term piece of state out of our Redux store as well.
//So we need to do a update state operation.We need to go through that entire flow and an accessing state operation as well.
import { changeSearchTerm } from "../store";

function CarSearch() {
    const dispatch = useDispatch();
//So whenever a user types in here, maybe they put in Subaru, we're going to try to find all the cars that have a name of Subaru.
//So I would delete the Ford Focus temporarily.We're not truly deleting it.It's just going to be removed temporarily from the list.
//And I would be left with Subaru when we do a search.I also want to update the total value down here as well.
//So it should only display the total value of actually visible cars.So it should go down temporarily to 70 $500.
//And then of course, if I delete the search term, all the different cars should come back and the total value should be updated appropriately as well.
//Now, the actual search term input itself right here is going be very similar to the input elements we already created up here inside of car form.
//So we're going to have a piece of state that keeps track of whatever user types in there.Whenever a user does type inside there, we're going to dispatch an action that is going to update our state inside the store.
    const searchTerm = useSelector((state)=>{
        return state.cars.searchTerm;
    })

    const handleSearchTermChange = (event) =>{
        dispatch(changeSearchTerm(event.target.value))
    }
    return (
    <div className="list-header">
        <h3 className="title is-3">My Cars</h3>
        <div className="search field is-horizontal">
            <label className="label">Search</label>
            <input
            className="input"
//So once again, we need to make sure that we try to access our state inside the store.We need to get access to the search term.
//So at the top of the file to access state, we need to import.useSelector.And then right after dispatch, I will define search.
//Term, and that's going to come from calling  useSelector.We will put in our selector function and in this case we need to return state NCAA's search term.
//Okay, let's try this out.I'm going to save now.So i will type in there and I should not get any errors from my console or anything like that.
//All right.So definitely off to a good start.Let's add in the actual filter logic here where you filter the list of cars in just a moment.
            value={searchTerm}//accessing search state (jab access krenge search input ki nvalue usmke kaam ayega)
            onChange={handleSearchTermChange}//updating search state(jab update hoga search input)
        
            />
        </div>
    </div>
    )

}

export default CarSearch;
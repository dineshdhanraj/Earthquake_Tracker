function ListingSelector(state)
{
return state.Data.features;
}

function ErrorSelector(state)
{
    return state.ErrorMessage;
}

function ItemDetailsSelector(state) 
{
        return state.Listing;
}


export  {ListingSelector,ErrorSelector,ItemDetailsSelector};       







// function DataSelector()
// {
// return useSelector((state)=>state.Data.features);
// }

// function ErrorSelector()
// {
//     return useSelector((state)=>state.Error_Message);
// }

// function ListSelector()
// {
//         return useSelector((state)=>state.Listing);
// }
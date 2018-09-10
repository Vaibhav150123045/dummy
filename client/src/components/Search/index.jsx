import React from 'react'
import { Search }from 'semantic-ui-react'
import { Input }from 'semantic-ui-react'


const SearchBar = () => {
    return (
        <Search/>
    )
}

const SearchBarReviews = () => <Input icon='search' placeholder='Search for reviews...' />



export{
    SearchBar,
    SearchBarReviews,
}
export default SearchBar
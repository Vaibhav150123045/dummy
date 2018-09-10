import React from 'react'
import { Rating } from 'semantic-ui-react'

const RatingExampleStar = () => <Rating icon='star' defaultRating={5} maxRating={5} size='huge' />

const RatingMedium = () => <Rating icon='star' defaultRating={5} maxRating={5}  />

export{
    RatingExampleStar,
    RatingMedium,
}
export default RatingExampleStar
import React from 'react'
import './category.scss'
import CollectionItem from '../../collection-item/Collection-item';
import { selectCollection } from '../../../redux/shop/shopSelector';
import { connect } from 'react-redux'

const Category = ({ collection }) => {
    
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className = 'title'>{title}</h2>
            <div className = 'items'> 
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Category);

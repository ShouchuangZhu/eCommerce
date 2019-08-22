import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../collection-overview/CollectionOverview'
import Category from '../category/Category';

const Shop = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component = {CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Category} />
        </div>
    );
}



export default Shop;
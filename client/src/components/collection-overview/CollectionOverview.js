import React from 'react'
import { connect } from 'react-redux';
import './collectionOverview.scss'
import { createStructuredSelector } from 'reselect';
import Preview from '../preview/Preview';
import { selectCollectionsForPreview} from '../../redux/shop/shopSelector';
const CollectionOverview = ({collections}) => {
    return (
        <div className = 'collections-overview'>
             {
                collections.map(
                    ({id, ...otherCollectionProps}) => (
                        <Preview key={id} {...otherCollectionProps} />
                    )
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);

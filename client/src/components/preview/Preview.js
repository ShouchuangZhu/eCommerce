import React from 'react'
import './preview.scss'
import CollectionItem from '../collection-item/Collection-item'

const Preview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map(({id, ...OtherItemProps}) => (
                        <CollectionItem key = {id} {...OtherItemProps} />
                    ))}
            </div>
        </div>
    )
}

export default Preview

import React from 'react';
import Menu from '../menu-item/Menu';
import './directory.scss'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directorySelector';
const Directory = ({sections}) =>{
        return (
            <div className="directory-menu"> 
                {sections.map(({id, ...otherSectionProps}) => (
                    <Menu key = {id} {...otherSectionProps}/>
                ))}
            </div>
        );
    }
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);


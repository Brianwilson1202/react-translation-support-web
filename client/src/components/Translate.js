import React, {Fragment} from 'react'
import {Link} from "react-router-dom";
import TranslationList from './TranslationList'
import RecentList from './RecentList'
import TagList from './TagList'
import RecommendedList from './RecommendedList'
import SearchBar from './SearchBar'
import MenuCard from './MenuCard'
import '../css/translation_list.css'



class Translate extends React.Component {

    render(){
        return (
            <Fragment>
                <div className='row'>
                      <MenuCard title='Request Translation' link='/translate/new'/>
                      <MenuCard title='Live Translation(not working)'/>
                      <MenuCard title='Leaderboard'/>
                </div>
    
                <div className='row'>
                    <div className='col s12 l8'>
                        <TranslationList/>
                    </div>
                    <div className='col s12 l4'>
                        <RecentList/>
                        <RecommendedList/>
                        <TagList/>
                    </div>
                </div>
            </Fragment>
        )
}

}


export default Translate

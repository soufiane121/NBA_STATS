import React from 'react'
import TeamCard from '../components/TeamCard'

class TeamsList extends React.Component {

    render(){
        // return("test")
        return ( this.props.teamsData !== null 
            ? this.props.teamsData.map(team => { return <TeamCard team={team} key={team.Name} handleTeamCardClick={this.props.handleTeamCardClick}/>}) 
            : [] )
        
    };
}

export default TeamsList;
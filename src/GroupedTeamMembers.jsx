import {useState} from 'react';

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  const [groupedEmployees,setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {

    var teams = [];
    var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = {team: 'TeamA', members: teamAMambers, collapsed: selectedTeam === 'TeamA' ? false : true }
    teams.push(teamA);
    
    var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    var teamA = {team: 'TeamB', members: teamBMambers, collapsed: selectedTeam === 'TeamB' ? false : true }
    teams.push(teamB);
    
    var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    var teamA = {team: 'TeamC', members: teamCMambers, collapsed: selectedTeam === 'TeamC' ? false : true }
    teams.push(teamC);
    
    var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    var teamD = {team: 'TeamD', members: teamAMambers, collapsed: selectedTeam === 'TeamD' ? false : true }
    teams.push(teamD);
  }
  
  return (
    <main className="container">
      {
        groupedEmployees.map((item) => {
          return(
            <div key={item.team} className="card-mt-2" style={{cursor:"pointer"}}>
              <h4 key={item.team} className="card-header text-secondary bg-white">Team Name: {item.team}</h4>
              <div id={"collapse_" + item.team}
                   className={item.collapsed === treu ? "collapsed" : ""}
              >
                <hr/>
                {
                  item.members.map(member => {
                                  return (
                                    <div className="mt-2">
                                      
                                    </div>
                                  );
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers
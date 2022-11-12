import TeamMemberCard from './TeamMemberCard.jsx'

const TeamMembers = ({selectedTeam, employees, handleEmployeeCardClick}) => {

  return (
     employees.map((employee)=>(
       <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} />
     ))
    
  )
  
}
export default TeamMembers;
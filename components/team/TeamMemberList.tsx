// TeamMembersList.tsx

import React from 'react';
import TeamMember, { TeamMemberProps } from './TeamMember';

interface TeamMembersListProps {
  members: TeamMemberProps[];
}

const TeamMembersList: React.FC<TeamMembersListProps> = ({ members }) => {
  // Separate mentors from team members
  const mentors = members.filter((member) => member.isMentor);
  const teamMembers = members.filter((member) => !member.isMentor);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Display mentors at the top */}
      {mentors.map((mentor) => (
        <TeamMember key={mentor.name} {...mentor} />
      ))}

      {/* Display team members */}
      {teamMembers.map((teamMember) => (
        <TeamMember key={teamMember.name} {...teamMember} />
      ))}
    </div>
  );
};

export default TeamMembersList;

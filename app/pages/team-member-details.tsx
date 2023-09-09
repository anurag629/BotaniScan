// pages/team-member-details.tsx
import { useRouter } from 'next/router';

const TeamMemberDetails = () => {
  const router = useRouter();
  const { name, description, email } = router.query;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{email}</p>
    </div>
  );
};

export default TeamMemberDetails;

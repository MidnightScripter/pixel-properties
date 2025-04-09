import { AgentInfoType } from '../../constants/agents';
import styles from './Agents.module.css';

export interface AgentListingType {
  agentInfo: AgentInfoType;
}

function AgentListing({ agentInfo }: AgentListingType) {
  return (
    <li className={styles.infoContainer}>
      <div className={styles.agentIntroBlock}>
        <span className={styles.imageContainer}>
          <img className={styles.image} src={agentInfo.image} alt='' />
        </span>
        <p className={styles.agentName}>{agentInfo.fullName}</p>
        <p className={styles.agentExp}>
          {agentInfo.yearsOfExperience} years experience
        </p>
      </div>
      <p className={styles.agentBiography}>{agentInfo.biography}</p>
    </li>
  );
}

export default AgentListing;

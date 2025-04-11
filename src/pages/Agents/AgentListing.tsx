import { AgentInfoType } from '../../constants/agents';
import styles from './Agents.module.css';

export interface AgentListingType {
  agentInfo: AgentInfoType;
}

function AgentListing({ agentInfo }: AgentListingType) {
  return (
    <article className={styles.infoContainer}>
      <div className={styles.agentIntroBlock}>
        <span className={styles.imageContainer}>
          <img className={styles.image} src={agentInfo.image} alt='' />
        </span>
        <h2 className={styles.agentName}>{agentInfo.fullName}</h2>
        <p className={styles.agentExp}>
          {agentInfo.yearsOfExperience} years experience
        </p>
      </div>
      <p className={styles.agentBiography}>{agentInfo.biography}</p>
    </article>
  );
}

export default AgentListing;

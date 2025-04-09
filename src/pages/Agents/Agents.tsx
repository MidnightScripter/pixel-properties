import AgentListing from './AgentListing';
import styles from './Agents.module.css';
import { AGENT_INFO } from '../../constants/agents';
import Hero from '../../components/layout/Hero/Hero';

function Agents() {
  const agentInfo = AGENT_INFO;
  return (
    <>
      <Hero heroImage='agentHero.webp' heroHeadline='Our Agents' />
      <section className={styles.container}>
        <h2 className={`headline2 ${styles.headline}`}>Meet Our Team</h2>
        <ul className={styles.agentGrid}>
          {agentInfo.map((agent) => (
            <AgentListing key={agent.id} agentInfo={agent} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Agents;

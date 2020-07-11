import React, { useEffect } from "react";
import AgentMainDetails from "./AgentMainDetails";
import AgentAbilityDetails from "./AgentAbilityDetails";

function AgentDetails({ agentDatas }) {
  const [currentSkillData, setCurrentSkillData] = React.useState();

  useEffect(() => {
    const temp = agentDatas.skills.filter((data, index) => index === 0);
    setCurrentSkillData(temp[0]);
  }, [agentDatas]);

  return (
    <section className="agent-details-section">
      <AgentMainDetails agentDatas={agentDatas} />
      {currentSkillData && (
        <AgentAbilityDetails
          agentDatas={agentDatas}
          currentSkillData={currentSkillData}
          setCurrentSkillData={setCurrentSkillData}
        />
      )}
    </section>
  );
}

export default AgentDetails;

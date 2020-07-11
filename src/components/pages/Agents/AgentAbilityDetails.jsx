import React from "react";

function AgentAbilityDetails({
  currentSkillData,
  agentDatas,
  setCurrentSkillData,
}) {
  const getCurrentSkillData = (skillID) => {
    const temp = agentDatas.skills.filter((skill) => skill.skillID === skillID);
    setCurrentSkillData(temp[0]);
  };
  return (
    <div className="agent-ability-details-container">
      <div className="agent-ability-title">SPECIAL ABILITIES</div>
      {/*  */}
      <nav className="abilities-nav-buttons">
        {agentDatas.skills.map((skill, index) => (
          <button key={skill.skillID} title={`${skill.name} - button`}>
            <img
              style={{
                backgroundColor:
                  currentSkillData.skillID === skill.skillID
                    ? "#FF4655"
                    : "#0f1821",
                opacity:
                  currentSkillData.skillID === skill.skillID ? "1" : ".7",
              }}
              key={skill.skillID}
              src={require(`../../../assets/agent-skills-icons/${skill.skillIcon}.png`)}
              alt={`${agentDatas.name}-${skill.defaultKey}-icon`}
              onClick={() => getCurrentSkillData(skill.skillID)}
            />
          </button>
        ))}
      </nav>
      <div className="agent-video" style={{ width: "100%" }}>
        <video
          key={currentSkillData.skillID}
          style={{ width: "100%" }}
          autoPlay
          muted
          loop
        >
          <source
            src={require(`../../../assets/agent-skills-videos/${currentSkillData.skillVideo}.mp4`)}
            type="video/mp4"
          />
        </video>
      </div>
      {/*  */}
      <div className="agent-other-details">
        <div className="agent-ability-default-name">{`${currentSkillData.defaultKey} - ${currentSkillData.name}`}</div>
        <div className="agent-ability-desc">{currentSkillData.desc}</div>
      </div>

      {/*  */}
    </div>
  );
}

export default AgentAbilityDetails;

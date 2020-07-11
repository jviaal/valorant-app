import React, { useState, useEffect } from "react";
import { AgentsStyled } from "./AgentsStyled";
import data from "../../../data/details.json";
import AgentsSlider from "./AgentsSlider";
import { motion } from "framer-motion";
import bg from "../../../assets/video-background/bg.mp4";
import AgentDetails from "./AgentDetails";

function Agents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [agentDatas, setAgentDatas] = useState();
  useEffect(() => {
    const temp = data.filter((agent, index) => {
      if (index === currentIndex) {
        return agent;
      }
      return null;
    });
    setAgentDatas(temp[0]);
  }, [currentIndex]);
  return (
    <AgentsStyled>
      <section className="agent-image-slider-section">
        <motion.video
          animate={{ height: "85%" }}
          initial={{ height: 0 }}
          transition={{ duration: 1, type: "tween" }}
          className="video-background"
          muted
          autoPlay
          loop
        >
          <source src={bg} type="video/mp4" />
        </motion.video>
        <AgentsSlider data={data} setCurrentIndex={setCurrentIndex} />
        <div className="current-agent-image-container">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {agentDatas && (
              <motion.img
                key={agentDatas.agentID}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ type: "tween", duration: 0.75 }}
                src={require(`../../../assets/agent-models/${agentDatas.name}.png`)}
                alt="agent"
              />
            )}
          </motion.div>
        </div>
      </section>
      {agentDatas && <AgentDetails agentDatas={agentDatas} />}
    </AgentsStyled>
  );
}

export default Agents;

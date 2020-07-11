import React from "react";
import { motion } from "framer-motion";

function AgentMainDetails({ agentDatas }) {
  return (
    <div className="agent-main-details">
      <motion.div className="agentID">{agentDatas.agentID}</motion.div>
      <motion.h1 className="agent-name">{agentDatas.name}</motion.h1>
      <motion.h2 className="agent-role">{`// ${agentDatas.role}`}</motion.h2>
      <motion.h2 className="agent-biography">{agentDatas.biography}</motion.h2>
    </div>
  );
}

export default AgentMainDetails;

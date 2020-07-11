import React from "react";
import { AgentsSliderStyled } from "./AgentsSliderStyled";
import Slider from "react-slick";

import { motion } from "framer-motion";

function AgentsSlider({ data, setCurrentIndex }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    afterChange: (current) => setCurrentIndex(current),
  };
  return (
    <AgentsSliderStyled>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.1 }}
        className="container"
      >
        <Slider {...settings}>
          {data &&
            data.map((agent) => {
              return (
                <div className="item" key={agent.name}>
                  <div>
                    <img
                      src={require(`../../../assets/agent-icons/${agent.name}.png`)}
                      alt={`${agent.name}-icon`}
                    />
                  </div>
                </div>
              );
            })}
        </Slider>
      </motion.div>
    </AgentsSliderStyled>
  );
}

export default AgentsSlider;

"use client";

import React from "react";

import { Wrapper, Contain, Cue, Pulse, Activity } from "./styles";


const Action = ({ activity }) => {
  return (
    <Wrapper>
      <Contain>
        <Cue>
          <Pulse />
        </Cue>
        <Activity>{activity}</Activity>
      </Contain>
    </Wrapper>
  );
};

export default Action;
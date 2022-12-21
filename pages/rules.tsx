import React from "react";
import DumbStruck from "../components/nontechnicalEventRuleCards/DumbStruck";
import HustleHour from "../components/nontechnicalEventRuleCards/HustleHour";
import PixLink from "../components/nontechnicalEventRuleCards/PixLink";
import TimesUp from "../components/nontechnicalEventRuleCards/TimesUp";
import CrazeFabr from "../components/onlineEventRuleCards/CrazeFabr";
import Insignia from "../components/onlineEventRuleCards/Insignia";
import MediaRaft from "../components/onlineEventRuleCards/MediaRaft";
import OnlineEventGeneralRules from "../components/onlineEventRuleCards/OnlineEventGeneralRules";
import Photostratus from "../components/onlineEventRuleCards/Photostratus";
import RulesCoordinators from "../components/RulesCoordinators";
import AndroDesign from "../components/technicalEventRuleCards/AndroDesign";
import Bewilder from "../components/technicalEventRuleCards/Bewilder";
import BugSlayers from "../components/technicalEventRuleCards/BugSlayers";
import ColorCastle from "../components/technicalEventRuleCards/ColorCastle";
import Paperix from "../components/technicalEventRuleCards/Paperix";

const Rules = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        padding: "5px 20px",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <h1 className="pageTitle">Hybernetix 2k23 - Event Rules</h1>
      <div>
        <h2>Technical Events</h2>
        <BugSlayers />
        <Paperix />
        <Bewilder />
        <ColorCastle />
        <AndroDesign />
      </div>
      <div>
        <h2>Non-Technical Events</h2>
        <HustleHour />
        <PixLink />
        <TimesUp />
        <DumbStruck />
      </div>
      <div>
        <h2>Online Events</h2>
        <OnlineEventGeneralRules />
        <MediaRaft />
        <CrazeFabr />
        <Photostratus />
        <Insignia />
      </div>
      <RulesCoordinators />
    </div>
  );
};

export default Rules;

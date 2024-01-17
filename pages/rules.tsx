import RulesCoordinators from "../components/RulesCoordinators";
import { RulesSection } from "../components/RulesSection";
import {
  generalRules,
  nonTechnicalEvents,
  technicalEvents,
} from "../globals/constants";
import { EventData } from "../types/Types";

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
      <h1 className="pageTitle">Tech-Pinnacle 2k24 - Event Rules</h1>
      <div>
        <h2>Genral Rules</h2>
        <ul>
          {generalRules.map((rule, id) => (
            <li style={{ marginBottom: "0.5rem" }} key={id}>
              {rule}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Technical Events</h2>
        {technicalEvents.map((event: EventData) => (
          <>
            <RulesSection event={event} />
          </>
        ))}
      </div>
      <div>
        <h2>Non-Technical Events</h2>
        {nonTechnicalEvents.map((event: EventData) => (
          <>
            <RulesSection event={event} />
          </>
        ))}
      </div>
      <RulesCoordinators />
    </div>
  );
};

export default Rules;

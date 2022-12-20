import { FunctionComponent } from "react";

export interface EventRulesComponentProps {
  title: string;
  rules: string[];
  id: Number;
}

const EventRulesComponent: FunctionComponent<EventRulesComponentProps> = (
  prop: EventRulesComponentProps
) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        padding: "5px 20px",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <h1>{prop.title}</h1>
      <ul>
        {prop.rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventRulesComponent;

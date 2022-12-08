import React from "react";
import EventRulesComponent, {
  EventRulesComponentProps,
} from "../components/EventRulesComponent";

const Rules = () => {
  const rules: EventRulesComponentProps[] = getEventRules();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Rules for Events!</h1>
      {rules.map((rule) => (
        <EventRulesComponent
          key={rule.id}
          title={rule.title}
          rules={rule.rules}
          id={rule.id}
        />
      ))}
    </div>
  );
};

function getEventRules(): EventRulesComponentProps[] {
  return [
    {
      title: "Bug Smashing",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "bug-smashing",
    },
    {
      title: "Paperix",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "paperix",
    },
    {
      title: "Quizzy",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "quizzy",
    },
    {
      title: "Color Castel",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "color-castel",
    },
    {
      title: "Andro Design",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "andro-design",
    },
    {
      title: "The Brain Hunt",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "brain-hunt",
    },
    {
      title: "Connectiva",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "connectiva",
    },
    {
      title: "Portmantaeu",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "portmantaeu",
    },
    {
      title: "Dumb C",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "dumb-c",
    },
    {
      title: "Logo Design",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "logo-design",
    },
    {
      title: "Multimedia",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "multimedia",
    },
    {
      title: "Meme Creation",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "meme-creation",
    },
    {
      title: "Capture It",
      rules: ["This Rule #1", "This Rule #2", "This Rule #3", "This Rule #4"],
      id: "capture-it",
    },
  ];
}

export default Rules;

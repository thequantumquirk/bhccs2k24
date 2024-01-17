import { EventData } from "../types/Types";

export const RulesSection = ({ event }: { event: EventData }) => {
  let eventTitle = `${event.id.toString() + ". " + event.name} ${
    event.description ? "(" + event.description + ")" : ""
  }`;
  return (
    <div id={event.slug.toString()}>
      <h3>{eventTitle}:-</h3>
      {event.topicsData.map((topic, id) => (
        <div key={id}>
          <h4>{topic.topicName}:</h4>
          <ul>
            {topic.items.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

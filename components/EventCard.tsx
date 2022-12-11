import Link from "next/link";

const EventCard = ({
  eventId,
  name,
  tagLine,
  navigateTo,
}: {
  eventId: number;
  name: string;
  tagLine: string;
  navigateTo: string;
}) => {
  const prependZero = (num: number) => (num < 10 ? "0" + num : num);

  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>{prependZero(eventId)}</h2>
          <h3>{name}</h3>
          <p>{tagLine}</p>
          <Link href={navigateTo} legacyBehavior>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

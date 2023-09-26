import { useEffect, useState } from "react";

interface TimelineEvent {
  time: number; // TODO: Convert to dates
}

interface TimelineItemProps {
  name: string;
  events: TimelineEvent[];
}

interface TimelineProps {
  items: TimelineItemProps[];
}

const TimelineItem: React.FC<{
  time: number;
  item: TimelineItemProps;
}> = ({ time, item: { events, name } }) => {
  if (time < events[0].time) {
    return null;
  }

  if (time > events[events.length - 1].time + 100) {
    return null;
  }

  // Figure out how long each event should be
  const eventLength = 500 / events.length;

  let eventIndex = events.findIndex((x) => x.time > time);

  if (eventIndex === -1) {
    eventIndex = events.length;
  }

  return (
    <div
      style={{
        width: 100,
        height: 50,
        backgroundColor: "yellow",
        transform: `translateX(${(eventIndex - 1) * eventLength}px)`,
        transition: "transform 0.3s ease",
      }}
    >
      {name}
    </div>
  );
};

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {});

  const updateStateInAnimationFrame = () => {
    setTime((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      updateStateInAnimationFrame();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation when the component mounts
    animationFrameId = requestAnimationFrame(animate);

    // Clean up the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <div>Time: {time}</div>
      <div style={{ width: 500, border: "1px solid black" }}>
        {items.map((x, i) => (
          <TimelineItem key={i} time={time} item={x} />
        ))}
      </div>
    </div>
  );
};

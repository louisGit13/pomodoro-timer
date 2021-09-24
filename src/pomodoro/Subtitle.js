import React from "react";

export default function Subtitle({ session, secondsToDuration }) {
  /* TODO: Update message below correctly format the time remaining in the current session */

  return (
    <div>
      <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(session.timeRemaining)} remaining
      </p>
    </div>
  );
}

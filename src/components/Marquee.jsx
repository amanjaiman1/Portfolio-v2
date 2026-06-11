/**
 * A seamless looping horizontal marquee. Renders two identical tracks
 * side-by-side and translates the wrapper by -50% so the loop is seamless.
 */
const Marquee = ({
  items = [],
  reverse = false,
  duration = "30s",
  className = "",
  separator = "\u272A",
}) => {
  const Track = ({ ariaHidden }) => (
    <div className="marquee-track" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={className}>{item}</span>
          <span className="mx-6 text-iris-lilac/70 sm:mx-10" aria-hidden>
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative flex w-full overflow-hidden">
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        <Track ariaHidden={false} />
        <Track ariaHidden={true} />
      </div>
    </div>
  );
};

export default Marquee;

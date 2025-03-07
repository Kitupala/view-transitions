import clsx from "clsx";

export const AnimatedText = ({ text, as: Comp = "p", classNames }) => {
  return (
    <Comp className={classNames}>
      {text.split("").map((char, i) => (
        <span
          key={char + i.toString()}
          style={{ transitionDelay: `${500 * (i / 100)}ms` }}
          className={clsx(
            "inline-block starting:opacity-0 opacity-100 duration-700 transition-all",
          )}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Comp>
  );
};

function ProgressBar({currentWidth}) {
  return (
    <div className="quiz__progress">
      <div
        className="quiz__progress-inner"
        style={{ width: currentWidth}}
      ></div>
    </div>
  );
}

export default ProgressBar;

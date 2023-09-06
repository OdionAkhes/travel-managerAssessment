
const Card = ({ headerLeft, headerRight, content, size = "medium" }) => {
  const sizeClasses = {
    small: "w-3/4 h-auto",
    medium: "w-3/4 h-auto",
    large: "w-3/4 h-auto",
  };

  return (
    <div
      className={`card bg-white border-t-4 border-yellow-500 shadow-md ${sizeClasses[size]}`}
    >
      <div className="header bg-yellow-50 p-2 flex justify-between">
        <h4 className="text-sm font-semibold">{headerLeft}</h4>
        {headerRight && (
          <span className="text-sm text-yellow-500 cursor-pointer">
            {headerRight}
          </span>
        )}
      </div>
      <div className="content p-4 text-xs text-gray-400">{content}</div>
    </div>
  );
};

export default Card;




/** @format */

const Card = ({ header, content, size = "medium" }) => {
  const sizeClasses = {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  };

  return (
    <div className={`card border-t-4  border-yellow-500 bg-white shadow-md ${sizeClasses[size]}`}>
      <h4 className="text-md font-semibold mb-2">{header}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Card;

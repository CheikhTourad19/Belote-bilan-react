function Card(props) {
  const { title, subtitle, description, image, button } = props;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 ">
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>
        <p className="text-gray-700">{description}</p>
        {button && button.length > 0 && (
          <div className="mt-4 flex justify-center space-x-2">
            {button.map((element, index) => (
              <div key={index}>{element}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

export const CardArticle = ({ payload }) => {
  const { title, description, imageUrl, author, date } = payload;
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img className="w-full h-64 md:h-96 object-cover" src={imageUrl} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.avatar}
            alt={author.name}
          />
          <div>
            <p className="text-gray-900 leading-none">{author.name}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

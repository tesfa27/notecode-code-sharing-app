const ShareLink = ({ id }) => {
  const url = `${window.location.origin}/snippets/${id}`;

  return (
    <div className="share-link p-4 mt-4 bg-white rounded-md shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-2">
      <p className="text-sm">Share this link:</p>
      <input
        className="flex-1 px-2 py-2 border rounded-md text-sm w-full"
        value={url}
        readOnly
      />
    </div>
  );
};

export default ShareLink; 

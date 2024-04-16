function GameTable({ imageURLs }) {
  return (
    <>
      {imageURLs.map((url, index) => {
        return <img key={index} src={url} />;
      })}
    </>
  );
}

export { GameTable };

import ShortsCard from "./ShortsCard";

const ShortsGrid = () => {
  const shorts = [
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Coffee Caramel Creme Brulee + The Purpose of a Water",
      views: "524k.views",
    },

  ];

  return (
    <>
    <div className="hidden md:block">
      <div className="flex items-center ml-0 ">
        <img src="/Youtube_shorts_icon.svg.png" alt="" className="w-33 h-4 ml-4" />
        <h1 className="text-xl mx-1">Shorts</h1>

      </div>
      <div className="grid md:grid-cols-7 mt-0">
        {shorts.map((short) => (
          <div>
            <ShortsCard
              imagelink={short.imagelink}
              title={short.title}
              views={short.views}
            ></ShortsCard>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ShortsGrid;

import VideoCard from './VideoCards'

const VideoGrid = () => {
  const videos = [
    {
      imagelink: "Tulips.jpg",
      title: "Express vs GoLang, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "C++ vs GoLang, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Rust vs GoLang, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
    {
      imagelink: "Tulips.jpg",
      title: "Light vs Electricity, ⚡ Who’s Faster? : Performance Test",
      channel: "Dev Technical",
      views: "157k views",
      timestamp: "2 months ago",
    },
  ];



  return <>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">

       {videos.map(video => <div>
        <VideoCard
        title={video.title}
        imagelink={video.imagelink}
        channel={video.channel}
        timestamp={video.timestamp}
        views={video.views}
        >

        </VideoCard>

        </div> )}

    </div></>;
};

export default VideoGrid;

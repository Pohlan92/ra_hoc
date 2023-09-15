import { DateTimePretty } from './DateTime';

export const VideoContainer = ({ list }) => {
  return <VideoList list={list} />;
};

const VideoList = ({ list }) => {
  return (
    <div className="video_container">
      {list.map(({ url, date }) => (
        <Video url={url} date={date} />
      ))}
    </div>
  );
};

const Video = ({ url, date }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
};

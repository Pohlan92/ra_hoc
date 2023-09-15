import { New, Popular } from './Wrapper';

export const MediaContainer = ({ list }) => {
  return <MediaList list={list} />;
};

const withWrapper = (Component) => {
  return (props) => {
    let Wrapper;
    if (props.views <= 100) {
      Wrapper = New;
    } else if (props.views > 1000) {
      Wrapper = Popular;
    } else {
      return <Component {...props} />;
    }

    return (
      <Wrapper>
        <Component {...props} />
      </Wrapper>
    );
  };
};

const ArticleItem = ({ title, views }) => {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};

const VideoItem = ({ url, views }) => {
  return (
    <div className="item item-video">
      <iframe
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

const VideoItemWithWrap = withWrapper(VideoItem);

const ArticleItemWithWrap = withWrapper(ArticleItem);

const MediaList = ({ list }) => {
  return (
    <div className="media_container">
      {list.map((item) => {
        switch (item.type) {
          case 'video':
            return <VideoItemWithWrap {...item} />;
          case 'article':
            return <ArticleItemWithWrap {...item} />;
        }
      })}
    </div>
  );
};

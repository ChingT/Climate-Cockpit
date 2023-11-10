import { useEffect, useState } from "react";
import {
  BookNews,
  BookThumbnail,
  CloseButton,
  Container,
  ModalContent,
  NewsThumbnail,
  Overlay,
  SimpleModal,
  Tab,
  Video,
  VideoContainer,
  VideoDescription,
  VideoInfoContainer,
  VideoTitle,
} from "./Resources.style.js";
import useApiRequest from "../../hooks/useApiRequest.js";

function Resources({ solutionId }) {
  const [modalVideo, setModalVideo] = useState(null);
  const { sendRequest, data } = useApiRequest("noAuth");
  const [videosList, setVideosList] = useState([]);
  const [booksList, setBooksList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [activeTab, setActiveTab] = useState("Videos");

  useEffect(() => {
    const fetchData = (type) => {
      sendRequest("get", `solution/resources/${solutionId}?type=${type}`);
    };

    if (activeTab === "Videos") {
      fetchData("videos");
    } else if (activeTab === "News") {
      fetchData("news");
    } else if (activeTab === "Books") {
      fetchData("books");
    }
  }, [activeTab]);

  useEffect(() => {
    if (data) {
      switch (activeTab) {
        case "Videos":
          setVideosList(data.results);
          break;
        case "News":
          setNewsList(data.results);
          break;
        case "Books":
          setBooksList(data.results);
          break;
        default:
          console.warn("Unhandled tab or no data available");
      }
    }
  }, [data]);

  const openModalWithVideo = (videoUrl) => {
    setModalVideo(videoUrl);
  };

  const closeModal = () => {
    setModalVideo(null);
  };
  const handleModalClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <Tab
          onClick={() => setActiveTab("Videos")}
          $isActive={activeTab === "Videos"}
        >
          Videos
        </Tab>
        <Tab
          onClick={() => setActiveTab("News")}
          $isActive={activeTab === "News"}
        >
          News
        </Tab>
        <Tab
          onClick={() => setActiveTab("Books")}
          $isActive={activeTab === "Books"}
        >
          Books
        </Tab>
      </Container>
      <SimpleModal $show={!!modalVideo} onClick={closeModal}>
        <ModalContent onClick={handleModalClick}>
          {modalVideo && (
            <iframe
              width="560"
              height="315"
              src={modalVideo}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <CloseButton $show={!!modalVideo} onClick={closeModal} />
        </ModalContent>
      </SimpleModal>

      {activeTab === "Videos" && (
        <VideoContainer>
          {videosList.map((video, index) => (
            <VideoInfoContainer key={index}>
              <Video onClick={() => openModalWithVideo(video.url)}>
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <Overlay onClick={() => openModalWithVideo(video.url)} />
              </Video>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.source}</VideoDescription>
            </VideoInfoContainer>
          ))}
        </VideoContainer>
      )}

      {activeTab === "News" && (
        <VideoContainer>
          {newsList.map((news, index) => (
            <div key={index}>
              <a href={news.url} target="_blank" rel="noreferrer noopener">
                <BookNews>
                  {news.thumbnail && (
                    <NewsThumbnail src={news.thumbnail} alt={news.title} />
                  )}
                </BookNews>
                <VideoTitle>{news.title}</VideoTitle>
              </a>
              <VideoDescription>{news.description}</VideoDescription>
            </div>
          ))}
        </VideoContainer>
      )}

      {activeTab === "Books" && (
        <VideoContainer>
          {booksList.map((book, index) => (
            <div key={index}>
              <a href={book.url} target="_blank" rel="noreferrer noopener">
                {book.thumbnail && (
                  <BookThumbnail src={book.thumbnail} alt={book.title} />
                )}
                <VideoTitle>{book.title}</VideoTitle>
              </a>
              <VideoDescription>{book.author}</VideoDescription>
            </div>
          ))}
        </VideoContainer>
      )}
    </div>
  );
}

export default Resources;

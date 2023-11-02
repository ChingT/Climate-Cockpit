import { useState } from "react";
import {
  CloseButton,
  Container,
  ModalContent,
  PlayButton,
  SimpleModal,
  Tab,
  Video,
  VideoContainer,
  VideoDescription,
  VideoInfoContainer,
  VideoTitle,
} from "./Resources.style.js";

function Resources() {
  const [activeTab, setActiveTab] = useState("VIDEOS");
  const [modalVideo, setModalVideo] = useState(null);
  const newsList = [
    {
      title: "News Title 1",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for News 1.",
    },
    {
      title: "News Title 2",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for News 2.",
    },
    {
      title: "News Title 3",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for News 3.",
    },
    {
      title: "News Title 4",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for News 4.",
    },
  ];
  const videoList = [
    {
      src: "https://www.youtube.com/embed/FIZI3k7mTvA",
      title: "Video Title 1",
      description: "This is a description for Video 1.",
    },
    {
      src: "https://www.youtube.com/embed/FIZI3k7mTvA",
      title: "Video Title 2",
      description: "This is a description for Video 2.",
    },
    {
      src: "https://www.youtube.com/embed/FIZI3k7mTvA",
      title: "Video Title 3",
      description: "This is a description for Video 3.",
    },
    {
      src: "https://www.youtube.com/embed/FIZI3k7mTvA",
      title: "Video Title 4",
      description: "This is a description for Video 4.",
    },
  ];
  const booksList = [
    {
      title: "Book Title 1",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for Book 1.",
    },
    {
      title: "Book Title 1",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for Book 1.",
    },
    {
      title: "Book Title 1",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for Book 1.",
    },
    {
      title: "Book Title 1",
      link: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
      thumbnail:
        "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
      description: "This is a description for Book 1.",
    },
  ];
  const openModalWithVideo = (videoSrc) => {
    setModalVideo(videoSrc);
  };

  const closeModal = () => {
    setModalVideo(null);
  };
  const handleModalClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div>
      <Container>
        <Tab
          onClick={() => setActiveTab("VIDEOS")}
          $isActive={activeTab === "VIDEOS"}
        >
          VIDEOS
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

      {activeTab === "VIDEOS" && (
        <VideoContainer>
          {videoList.map((video, index) => (
            <VideoInfoContainer key={index}>
              <Video onClick={() => openModalWithVideo(video.src)}>
                <PlayButton />
              </Video>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
            </VideoInfoContainer>
          ))}
        </VideoContainer>
      )}

      {activeTab === "News" && (
        <VideoContainer>
          {newsList.map((news, index) => (
            <div key={index}>
              <a href={news.link} target="_blank" rel="noreferrer noopener">
                {news.thumbnail && (
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    style={{ maxWidth: "60%", maxHeight: "100px" }}
                  />
                )}
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
              <a href={book.link} target="_blank" rel="noreferrer noopener">
                {book.thumbnail && (
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    style={{ maxWidth: "60%", maxHeight: "100px" }}
                  />
                )}
                <VideoTitle>{book.title}</VideoTitle>
              </a>
              <VideoDescription>{book.description}</VideoDescription>
            </div>
          ))}
        </VideoContainer>
      )}
    </div>
  );
}

export default Resources;

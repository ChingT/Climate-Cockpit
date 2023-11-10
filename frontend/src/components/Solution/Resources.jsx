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

const booksList = [
  {
    title: "Book Title 1",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    author: "Author",
  },
  {
    title: "Book Title 1",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    author: "Author",
  },
  {
    title: "Book Title 1",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    author: "Author",
  },
  {
    title: "Book Title 1",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    author: "Author",
  },
];

const newsList = [
  {
    title: "News Title 1",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    description: "This is a description for News 1.",
  },
  {
    title: "News Title 2",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    description: "This is a description for News 2.",
  },
  {
    title: "News Title 3",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    description: "This is a description for News 3.",
  },
  {
    title: "News Title 4",
    url: "https://www.reuters.com/business/sustainable-business/swiss-could-hit-co2-target-with-156-billion-package-study-2022-09-16/",
    thumbnail:
      "https://www.reuters.com/resizer/SKxbWYDjw4FppWrtXQV0dS9pKBw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F7HRDCUL7BO3TF74QN56QAXFAI.jpg",
    description: "This is a description for News 4.",
  },
];

function Resources({ solutionId }) {
  const [activeTab, setActiveTab] = useState("Videos");
  const [modalVideo, setModalVideo] = useState(null);
  const { sendRequest, data, error, loading } = useApiRequest("noAuth");
  const [videosList, setVideosList] = useState([]);

  useEffect(() => {
    sendRequest("get", `solution/resources/${solutionId}`);
  }, []);

  useEffect(() => {
    if (data) {
      setVideosList(data.results);
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

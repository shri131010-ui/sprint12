import MovieCard from "./MovieCard";

const meta = {
  title: "Components/MovieCard",
  component: MovieCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default = {
  args: {
    movie: {
      id: 1,
      title: "Inception",
      poster_path: "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      vote_average: 8.8,
      release_date: "2010-07-16",
    },
  },
};
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import General from "./data/general.json";
import Business from "./data/business.json";
import Enter from "./data/enter.json";
import Health from "./data/health.json";
import Science from "./data/science.json";
import Sports from "./data/sports.json";
import Technology from "./data/technology.json";
import Footer from "./Footer";
import  Modal  from "./Model";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: "in",
    category: "general",
  };
  static propsTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loader: true,
      page: 1,
      totalResults: 0,
      progress: 0,
    };
    document.title = `${capitalizeFirstLetter(
      this.props.category
    )} - NewsGhost`;
  }

  async componentDidMount() {
    this.updateNews(this.state.page, this.state.loader, 1);
  }

  async updateNews(page, loader, index) {
    this.setState({ loader: loader, progress: index !== 2 && 30 });

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${this.props.pageSize}&page=${page}`;
    // this.setState({ progress: index !== 2 && 40 });
    // let data = await fetch(url);
    // let jsonData = await data.json();
    // this.setState({ progress: index !== 2 && 70 });
    // this.setState({
    //   page: page,
    //   articles:
    //     index === 1
    //       ? jsonData.articles
    //       : this.state.articles.concat(jsonData.articles),
    //   totalResults: jsonData.totalResults,
    //   loader: false,
    //   progress: index !== 2 && 100,
    // });

    this.setState({ progress: index !== 2 && 70 });
    switch (this.props.category) {
      case "technology":
        this.setState({
          page: page,
          articles: Technology.articles,
          totalResults: Technology.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      case "sports":
        this.setState({
          page: page,
          articles: Sports.articles,
          totalResults: Sports.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      case "science":
        this.setState({
          page: page,
          articles: Science.articles,
          totalResults: Science.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      case "general":
        this.setState({
          page: page,
          articles: General.articles,
          totalResults: General.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      case "business":
        this.setState({
          page: page,
          articles: Business.articles,
          totalResults: Business.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      case "business":
        this.setState({
          page: page,
          articles: Business.articles,
          totalResults: Business.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      case "entertainment":
        this.setState({
          page: page,
          articles: Enter.articles,
          totalResults: Enter.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
        case "health":
        this.setState({
          page: page,
          articles: Health.articles,
          totalResults: Health.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
      default:
        this.setState({
          page: page,
          articles: General.articles,
          totalResults: General.totalResults,
          loader: false,
          progress: index !== 2 && 100,
        });
        break;
    }
  }

  fetchMoreData = () => {
    if (
      this.state.page + 1 >
      !Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.updateNews(this.state.page + 1, true, 2);
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          height={3}
          //onLoaderFinished={() => this.setState({progress:100})}
        />
        <Modal />
        <div>
          <h3 className="text-center my-3">
            NewsGhost - Top {capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h3>
          {this.state.loader && <Spinner />}
          {this.state.articles !== undefined ? (
            // <InfiniteScroll
            //   dataLength={this.state.articles.length}
            //   next={this.fetchMoreData}
            //   hasMore={this.state.articles.length !== this.state.totalResults}
            //   loader={<Spinner />}
            // >
              <div className="container">
                <div className="row">
                  {this.state.articles &&
                    this.state.articles.map((value, index) => {
                      return (
                        <div className="col-md-4 my-3" key={index}>
                          <NewsItem
                            title={value.title && value.title.slice(0, 80)}
                            description={
                              value.description &&
                              value.description.slice(0, 150)
                            }
                            newsUrl={value.url}
                            imageUrl={value.urlToImage}
                            publishedAt={value.publishedAt}
                            Auther={value.author}
                            source={value?.source?.name}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            //  </InfiniteScroll>
          ) : (
            <h2 className="text-center">Data Not Found</h2>
          )}
        </div>
        <Footer />
      </>
    );
  }
}

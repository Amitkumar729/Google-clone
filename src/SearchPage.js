import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
// import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // live data
  const { data } = useGoogleSearch(term);

  // fetching data from the response file....
//   const data = Response;

  console.log(data);
  return (
    <div className="SearchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img className="searchPage_logo" src=" ../google-logo.png " alt="" />
        </Link>

        <div className="searchPage_headerBody">
          <Search hideButtons />

          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shoppping">Shopping</Link>
              </div>

              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>

              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/setting">Setting</Link>
              </div>

              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results(
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>{item.displayLink}  <ExpandMoreIcon/> </a>

              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>))} 

        </div>
      )}
    </div>
  );
}

export default SearchPage;

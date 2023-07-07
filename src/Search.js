import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ hideButtons = false }) {
  const [state, dispatch] = useStateValue("");
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    // we will come back...
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div
        className={`search_buttons ${hideButtons && "search_Buttonshidden"}`}
      >
        <Button type="submit" onClick={(e) => search(e)} variant="outlined">
          Google Search
        </Button>
        <Button
          className={`${hideButtons && "search_Buttonshidden"}`}
          variant="outlined"
        >
          I'm Felling Lucky
        </Button>
      </div>
    </form>
  );
}

export default Search;

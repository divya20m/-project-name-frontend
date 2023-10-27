import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export function LikeAndDis() {
  const [like, setLike] = useState(0);

  const [dislike, setDisLike] = useState(0);

  return (
    <div>
      <IconButton
        aria-label="dislike-btn"
        onClick={() => {
          setDisLike(dislike + 1);
        }}
      >
        <Badge badgeContent={dislike} color="secondary">
          <ThumbDownIcon />
        </Badge>
      </IconButton>

      <IconButton
        aria-label="like-btn"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="secondary">
          <ThumbUpIcon />
        </Badge>
      </IconButton>
    </div>
  );
}

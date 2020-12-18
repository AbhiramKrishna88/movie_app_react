import React,{useState} from "react";
import MovieModal from "./MovieModal";
import "./style.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Dialog from '@material-ui/core/Dialog'
import {DialogTitle,Button, Typography} from '@material-ui/core'
//<img className="rowposter" src={props.imgurl} alt={props.movie.original_title}/>
const MovieCard = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
  return (
    <div>  
      <Card className="rowposter">
        <CardActionArea onClick={handleClickOpen}>
        <img className="rowposterimg" src={props.imgurl} alt={props.movie.original_title}/>
        </CardActionArea>
      </Card>
      <Dialog aria-labelledby="customized-dialog-title" open={open} >
            <Button onClick={handleClose} variant="text" className="align-self-end position-absolute" style={{top:"-5px",right:"-10px"}} color="primary">
                <i className="fa fa-times-circle fa-2x py-1 px-2 rounded bg-light"></i>
            </Button>
          <MovieModal movie={props.movie} background_img={props.backdrop_img}/>
      </Dialog>
    </div>
  );
};

export default MovieCard;

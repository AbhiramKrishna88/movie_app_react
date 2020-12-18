import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({movie,background_img}) {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB}&include_video=true`
      );
      console.log(res.data);
      //setMovies(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
        <DialogContent className="text-light bg-dark" style={{minHeight:'50vh',backgroundSize:"cover",backgroundImage: `linear-gradient( 120deg,  rgba(0,0,150,0.8) 60%, rgba(0,0,0,0.7) 40% ),url(${background_img})`, backgroundRepeat:"no-repeat"}}>
          <Typography gutterBottom>
            {movie.overview}
          </Typography>
        </DialogContent>
    </div>
  );
}

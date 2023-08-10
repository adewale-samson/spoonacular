import { Card as CardComponent } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Card = ({info, moreClick}) => {

  return (
    <>
     
      <CardComponent sx={{ maxWidth: "400px", height: '550px', borderRadius: '5px', marginBottom: '45px', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="231px"
            width="100%"
            image={info.image}
            alt={info.title}
          />
          <CardContent>
            <Typography variant="h5" component="div" sx={{fontSize: {xs:'16px', md:'20px'}, width: {xs:'100%', md:'350px'}, height: '48px',marginBottom: '15px'}}>
              {info.title}
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{height: '96px', width: {xs:'100%', md:'350px'}}} dangerouslySetInnerHTML={{ __html: info.summary.slice(0, 190) }}>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" endIcon={<ArrowRightAltIcon />} sx={{textTransform: 'initial', color: '#363636', fontSize: '16px', fontWeight: '700', marginTop: '10px'}} onClick={moreClick}>
            Read more
          </Button>
        </CardActions>
      </CardComponent>
     
    </>
  );
};

export default Card;

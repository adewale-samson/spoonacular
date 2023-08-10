
import { CardMedia, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import {KeyboardBackspace} from "@mui/icons-material";
import {useLocation, useNavigate } from 'react-router-dom'





const Recipe = () => {
const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1)
}

  const location = useLocation();
  const image = location.state.click.image;
  const title = location.state.click.title;
  const content = location.state.click.summary;
  const steps = location.state.click.analyzedInstructions[0].steps
  const ingredients = location.state.click.nutrition.ingredients
  const nutrition = location.state.click.nutrition.nutrients
  console.log(nutrition)
  
  return (
    <Box>
      <Box>
        <CardMedia
          sx={{ height: "312px", width: "100%" }}
          image={image}
          title={title}
        />
        <Box
          sx={{
            padding: {xs:'35px 15px', md:"35px 75px", lg:'35px 75px'} ,
            background: "#ffffff",
            width: "100%",
            margin: '0 auto',
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
            border: "1px solid #EAEAEA",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", fontWeight: '600' }}
          >
            {title}
          </Typography>
            <div className="font-[18px] font-[Montserrat,sans-serif]">
              <div dangerouslySetInnerHTML={{ __html: content}}></div>
              <h4 className="mt-4 px-2 text-2xl font-semibold">Ingredients</h4>
              <p className="mt-4 ">
                {ingredients.map(res => <span key={res.id} className="p-2">{res.name}, </span>)}
              </p>
              <h4 className="mt-4 px-2 text-2xl font-semibold">Recipe</h4>
              <ol className="mt-4 ">
                {steps.map(res => <li key={res.number} className="p-2">{res.number}. {res.step}</li>)}
              </ol>
              <h4 className="mt-4 px-2 text-2xl font-semibold">Nutrients(Amount)</h4>
              <p className="mt-4">
                {nutrition.map((res, index) => <span key={index} className="p-2">{(res.name)}({(res.amount)}{(res.unit)}), </span>)}
              </p>
            </div>
        </Box>
      </Box>
      <Box >
        <Button
          size="small"
          startIcon={<KeyboardBackspace />}
          sx={{
            textTransform: "initial",
            color: "#363636",
            fontSize: "16px",
            fontWeight: 700,
            marginBottom: '10px',
            padding: {xs:'35px 40px', md:"35px 75px", lg:'35px 75px'}
            
          }}
          onClick={backHandler}
        >
          Back to homepage
        </Button>
      </Box>
    </Box>
  );
};

export default Recipe;

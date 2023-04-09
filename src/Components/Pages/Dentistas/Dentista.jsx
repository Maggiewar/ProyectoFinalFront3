import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Dentista = ({ dentistas, dispatch }) => {
  return (
    <div>
      {dentistas.map((dentista) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={dentista.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="dentista">
                  R
                </Avatar>
              }
              title="dentista.name"
            />
            <CardMedia
              component="img"
              height="194"
              image={
                "https://res.cloudinary.com/dyalnu6oz/image/upload/v1680986962/odontologo_v5thlh.jpg"
              }
              alt="especialista"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Con más de 10 años de Experiencia, nuestro especialista experto
                en cirujia oral a realizado cajas de dientes.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANSLE_FAVORITE", payload: dentista })
                }
              >
                <FavoriteIcon color="disabled" />
              </IconButton>
              <Link to={"/dentista/${dentista.id}"}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
            <Typography paragraph>Method:</Typography>
          </Card>
        );
      })}
      Especialista
    </div>
  );
};

export default Dentista;

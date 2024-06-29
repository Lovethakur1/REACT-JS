// BgmiCard.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: "10px",
  border: "2px solid #ffcb05",
  backgroundColor: "#1c1c1c",
  color: "#ffffff",
  maxWidth: 345,
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00c853",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#00e676",
  },
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
}));

const BgmiCard = () => {
  return (
    <CustomCard>
      <CardHeader
        avatar={<CustomAvatar src="/path/to/avatar.png" />}
        title="BGMI"
        titleTypographyProps={{ variant: "h6", color: "#fff" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" color="textSecondary">
              JUL 11, 2024, 11:00 AM
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" color="primary">
              5 ROYALE PASS GIVEAWAY
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              <span role="img" aria-label="coin">
                🏅
              </span>{" "}
              2.3k
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography variant="body2" color="textSecondary">
              <span role="img" aria-label="solo">
                🧑‍🤝‍🧑
              </span>{" "}
              46/400
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          <CustomButton fullWidth>Open</CustomButton>
        </Box>
        <Box mt={2} display="flex" alignItems="center">
          <Avatar src="/path/to/host-avatar.png" />
          <Box ml={2}>
            <Typography variant="body1" color="primary">
              BattleXo Exclusive
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Host
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </CustomCard>
  );
};

export default BgmiCard;

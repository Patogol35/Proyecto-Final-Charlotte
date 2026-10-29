
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function InstructionsScreen({
  onStart,
  difficulty,
  t,
}) {
  const seconds =
    difficulty === "easy"
      ? 15
      : difficulty === "medium"
      ? 10
      : 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%", maxWidth: 550 }}
    >
      <Card
        sx={{
          p: 4,
          textAlign: "center",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom>
            📖 {t.instructions}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {t.instructionsDescription}
          </Typography>

          <List sx={{ textAlign: "left", mb: 3 }}>
            <ListItem>
              <ListItemText primary={`🔹 ${t.randomQuestions}`} />
            </ListItem>

            <ListItem>
              <ListItemText
                primary={`🔹 ${t.timePerQuestion} ${seconds}${t.seconds}`}
              />
            </ListItem>

            <ListItem>
              <ListItemText primary={`🔹 ${t.correctAnswerPoints}`} />
            </ListItem>

            <ListItem>
              <ListItemText primary={`🔹 ${t.timeRunsOut}`} />
            </ListItem>

            <ListItem>
              <ListItemText primary={`🔹 ${t.finalScoreRecord}`} />
            </ListItem>
          </List>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PlayArrowIcon />}
            onClick={onStart}
            sx={{ px: 5, py: 1.5, borderRadius: 3 }}
          >
            {t.start}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
              }

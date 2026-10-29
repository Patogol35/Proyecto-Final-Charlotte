
import { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { motion } from "framer-motion";
import ReplayIcon from "@mui/icons-material/Replay";
import confetti from "canvas-confetti";

export default function ResultScreen({ score, total, onRestart, t }) {
  const maxScore = total * 0.5;
  const percent = maxScore > 0 ? (score / maxScore) * 100 : 0;

  let message = t.tryAgain;

  if (percent >= 80) {
    message = t.excellent;
  } else if (percent >= 50) {
    message = t.good;
  }

  useEffect(() => {
    let interval;

    if (percent >= 80) {
      const end = Date.now() + 3000;

      interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
        });
      }, 300);
    } else if (percent >= 50) {
      confetti({
        particleCount: 80,
        spread: 60,
        colors: ["#4ade80", "#60a5fa", "#facc15"],
        origin: { y: 0.6 },
      });
    } else {
      const end = Date.now() + 2000;

      interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }

        confetti({
          particleCount: 15,
          angle: 90,
          spread: 20,
          startVelocity: 20,
          scalar: 1.2,
          colors: ["#60a5fa", "#3b82f6", "#1e40af"],
          origin: { x: Math.random(), y: 0 },
        });
      }, 250);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [percent]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%", maxWidth: 500, margin: "0 auto" }}
    >
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          backdropFilter: "blur(12px)",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(30,41,59,0.7)"
              : "rgba(255,255,255,0.85)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {t.finished}
          </Typography>

          <Typography variant="h6" gutterBottom>
            {t.score}: {score} / {maxScore}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {message}
          </Typography>

          <Stack direction="row" justifyContent="center">
            <Button
              variant="contained"
              startIcon={<ReplayIcon />}
              onClick={onRestart}
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #2563eb, #9333ea)",
                "&:hover": {
                  background: "linear-gradient(90deg, #1e40af, #7e22ce)",
                },
              }}
            >
              {t.playAgain}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}

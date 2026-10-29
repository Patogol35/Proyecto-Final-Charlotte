
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  CircularProgress,
  Box,
  LinearProgress,
} from "@mui/material";

import { motion } from "framer-motion";
import { CheckCircle, Cancel } from "@mui/icons-material";

export default function QuestionCard({
  question,
  current,
  total,
  score,
  onAnswer,
  time,
  maxTime,
  selected,
  t,
}) {
  if (!question) return null;

  const circleSize = 60;
  const progress = ((current + 1) / total) * 100;

  return (
    <motion.div
      key={current}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ width: "90%", maxWidth: 700, margin: "0 auto" }}
    >
      <Card
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          backdropFilter: "blur(12px)",
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(30,41,59,0.95)"
              : "rgba(255,255,255,0.95)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
        }}
      >
        <CardContent>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ mb: 3, height: 8, borderRadius: 5 }}
          />

          <Stack
            alignItems="center"
            spacing={2}
            mb={4}
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" fontWeight={600}>
              {t.question} {current + 1} / {total}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <motion.div
                animate={time <= 3 ? { scale: [1, 1.2, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <Box
                  position="relative"
                  sx={{
                    width: circleSize,
                    height: circleSize,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(time / maxTime) * 100}
                    size={circleSize}
                    thickness={5}
                    sx={{
                      color:
                        time > maxTime * 0.5
                          ? "success.main"
                          : time > 3
                          ? "warning.main"
                          : "error.main",
                    }}
                  />

                  <Typography
                    fontWeight="bold"
                    sx={{ position: "absolute", lineHeight: 1 }}
                  >
                    {time}{t.seconds}
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Stack>

          <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
            {question.question}
          </Typography>

          <Stack spacing={3} mt={2}>
            {question.options.map((opt, i) => {
              const isSelected = selected === opt;
              const isCorrect = opt === question.answer;

              return (
                <motion.div
                  key={`${current}-${i}`}
                  whileHover={!selected ? { scale: 1.03 } : {}}
                  whileTap={!selected ? { scale: 0.97 } : {}}
                  onClick={() => !selected && onAnswer(opt)}
                  style={{ cursor: selected ? "default" : "pointer" }}
                >
                  <Button
                    fullWidth
                    disabled={selected !== null && !isSelected}
                    variant={isSelected ? "contained" : "outlined"}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      fontWeight: 500,
                      py: 1.5,
                      fontSize: "0.95rem",
                      justifyContent: "space-between",
                      backgroundColor: isSelected
                        ? isCorrect
                          ? "success.main"
                          : "error.main"
                        : "transparent",
                      color: isSelected ? "#fff" : "inherit",
                    }}
                    endIcon={
                      isSelected
                        ? isCorrect
                          ? <CheckCircle />
                          : <Cancel />
                        : null
                    }
                  >
                    {opt}
                  </Button>
                </motion.div>
              );
            })}
          </Stack>

          <Typography
            variant="body2"
            align="right"
            sx={{ mt: 3, color: "text.secondary", fontWeight: 500 }}
          >
            {t.points}: {score}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

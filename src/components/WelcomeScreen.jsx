
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Box,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";

import { motion } from "framer-motion";

export default function WelcomeScreen({
  onStart,
  setDifficulty,
  difficulty,
  darkMode,
  toggleDarkMode,
  language,
  onLanguageChange,
  t,
}) {
  const difficultyLevels = [
    { value: "easy", label: t.easy, color: "#16a34a", hover: "#15803d" },
    { value: "medium", label: t.medium, color: "#2563eb", hover: "#1d4ed8" },
    { value: "hard", label: t.hard, color: "#dc2626", hover: "#b91c1c" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%", maxWidth: 550 }}
    >
      <Card
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 4,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(145deg,#1e293b,#0f172a)"
              : "linear-gradient(145deg,#ffffff,#f8fafc)",
          boxShadow:
            "0 8px 25px rgba(0,0,0,0.15),0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            mb={2}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#2563eb", flexGrow: 1 }}
            >
              {t.title}
            </Typography>

            <IconButton
              onClick={onLanguageChange}
              aria-label="Change language"
              title={t.switchLanguage}
              sx={{
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <TranslateIcon />
            </IconButton>

            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              aria-label="Toggle dark mode"
              sx={{ border: "1px solid", borderColor: "divider" }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Stack>

          <Typography variant="body2" sx={{ mb: 3, fontWeight: 500 }}>
            {t.developedBy}{" "}
            <Box
              component="span"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              Jorge Patricio Santamaría Cherrez
            </Box>
          </Typography>

          <Stack
            spacing={1.5}
            sx={{
              textAlign: "left",
              p: 3,
              mb: 3,
              borderRadius: 3,
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(100,116,139,0.15)"
                  : "rgba(96,165,250,0.08)",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
              }}
            >
              <InfoIcon fontSize="small" />
              {t.instructions}
            </Typography>

            <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
              <CheckCircleIcon fontSize="small" color="success" />
              <span>{t.randomQuestions}</span>
            </Typography>

            <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
              <TimerIcon fontSize="small" color="warning" />
              {t.timePerQuestion}{" "}
              {difficulty === "easy"
                ? 15
                : difficulty === "medium"
                ? 10
                : 5}
              {t.seconds}
            </Typography>

            <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
              <EmojiEventsIcon fontSize="small" color="primary" />
              {t.correctAnswerPoints}
            </Typography>

            <Typography variant="body2" sx={{ display: "flex", gap: 1 }}>
              <BarChartIcon fontSize="small" color="action" />
              {t.selectDifficulty}
            </Typography>
          </Stack>

          <Stack spacing={2} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              {t.selectDifficulty}
            </Typography>

            <ToggleButtonGroup
              exclusive
              value={difficulty}
              onChange={(_, value) => {
                if (value) setDifficulty(value);
              }}
              sx={{ width: "100%", maxWidth: 360, display: "flex" }}
            >
              {difficultyLevels.map((level) => (
                <ToggleButton
                  key={level.value}
                  value={level.value}
                  sx={{
                    flex: 1,
                    fontWeight: 600,
                    borderRadius: 2,
                    "&.Mui-selected": {
                      backgroundColor: level.color,
                      color: "#fff",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: level.hover,
                    },
                  }}
                >
                  {level.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>

          <Box mt={4}>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              onClick={onStart}
              sx={{
                px: 6,
                py: 1.8,
                fontSize: "1.1rem",
                borderRadius: 3,
                textTransform: "none",
              }}
            >
              {t.start}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

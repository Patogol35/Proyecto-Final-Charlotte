
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
  ButtonGroup,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";
import TranslateIcon from "@mui/icons-material/Translate";

import { motion } from "framer-motion";

export default function WelcomeScreen({
  onStart,
  setDifficulty,
  difficulty,
  darkMode,
  toggleDarkMode,
  language,
  setLanguage,
  t,
}) {
  const colors = {
    easy: { main: "#16a34a", hover: "#15803d" },
    medium: { main: "#2563eb", hover: "#1d4ed8" },
    hard: { main: "#dc2626", hover: "#b91c1c" },
  };

  const levels = [
    { value: "easy", label: t.easy },
    { value: "medium", label: t.medium },
    { value: "hard", label: t.hard },
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
          {/* SELECTOR DE IDIOMA */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
            sx={{ mb: 2 }}
          >
            <TranslateIcon
              fontSize="small"
              sx={{ color: "text.secondary" }}
            />

            <ButtonGroup
              size="small"
              variant="outlined"
              aria-label="Language selector"
            >
              {["es", "en"].map((lang) => (
                <Button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  variant={language === lang ? "contained" : "outlined"}
                  sx={{
                    minWidth: 55,
                    fontWeight: 800,
                    borderRadius: 2,
                    textTransform: "none",
                    borderColor: "#2563eb",
                    ...(language === lang && {
                      backgroundColor: "#2563eb",
                      color: "#fff",
                    }),
                  }}
                >
                  {lang.toUpperCase()}
                </Button>
              ))}
            </ButtonGroup>
          </Stack>

          {/* TITULO + MODO OSCURO */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            mb={2}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#2563eb" }}
            >
              {t.title}
            </Typography>

            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              aria-label={t.toggleTheme}
              sx={{
                border: "1px solid",
                borderColor: (theme) =>
                  theme.palette.mode === "dark"
                    ? "#f1f5f9"
                    : "#1e293b",
              }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Stack>

          {/* DESARROLLADOR */}
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              fontWeight: 500,
              color: (theme) =>
                theme.palette.mode === "dark" ? "#cbd5f5" : "#334155",
            }}
          >
            {t.developedBy}{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#60a5fa" : "#1d4ed8",
              }}
            >
              Jorge Patricio Santamaría Cherrez
            </Box>
          </Typography>

          {/* INSTRUCCIONES */}
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
              border: "1px solid rgba(0,0,0,0.05)",
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

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CheckCircleIcon fontSize="small" color="success" />
              <span>{t.questionsInfo}</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <TimerIcon fontSize="small" color="warning" />
              {t.timeInfo}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <EmojiEventsIcon fontSize="small" color="primary" />
              {t.pointsInfo}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <BarChartIcon fontSize="small" color="action" />
              {t.difficultyInfo}
            </Typography>
          </Stack>

          {/* SELECCION DE DIFICULTAD */}
          <Stack spacing={2} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              {t.selectDifficulty}
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ToggleButtonGroup
                exclusive
                value={difficulty}
                onChange={(event, value) => {
                  if (value) setDifficulty(value);
                }}
                aria-label={t.selectDifficulty}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  display: "flex",
                }}
              >
                {levels.map((level) => (
                  <ToggleButton
                    key={level.value}
                    value={level.value}
                    sx={{
                      flex: 1,
                      fontWeight: 600,
                      borderRadius: 2,
                      textAlign: "center",
                      color:
                        difficulty === level.value ? "#fff" : "inherit",
                      backgroundColor:
                        difficulty === level.value
                          ? colors[level.value].main
                          : "transparent",
                      "&.Mui-selected": {
                        backgroundColor: colors[level.value].main,
                        color: "#fff",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: colors[level.value].hover,
                      },
                    }}
                  >
                    {level.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Stack>

          {/* BOTON COMENZAR */}
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

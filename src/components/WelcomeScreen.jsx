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
  Tooltip,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
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
  language = "es",
  setLanguage = () => {},
}) {
  const isEnglish = language === "en";

  const text = {
    title: isEnglish ? "Interactive Quiz" : "Quiz Interactivo",
    project: isEnglish
      ? "English Final Project"
      : "Proyecto Final de Inglés",
    institute: isEnglish
  ? "Charlotte English School"
  : "Escuela de Inglés Charlotte",
    developed: isEnglish ? "Developed by" : "Desarrollado por",
    instructions: isEnglish ? "Instructions" : "Instrucciones",
    questions: isEnglish
      ? "Answer a total of 20 questions, worth 0.5 points each."
      : "Responde un total de 20 preguntas, a 0.5 puntos cada una.",
    time: isEnglish
      ? "You have a time limit for each question."
      : "Tienes un límite de tiempo para cada pregunta.",
    points: isEnglish
      ? "Earn points for each correct answer."
      : "Gana puntos por cada respuesta correcta.",
    difficulty: isEnglish
      ? "Choose the difficulty before starting:"
      : "Selecciona la dificultad:",
    easy: isEnglish ? "Easy" : "Fácil",
    medium: isEnglish ? "Medium" : "Medio",
    hard: isEnglish ? "Hard" : "Difícil",
    start: isEnglish ? "Start" : "Comenzar",
    theme: isEnglish
      ? darkMode
        ? "Switch to light mode"
        : "Switch to dark mode"
      : darkMode
        ? "Cambiar a modo claro"
        : "Cambiar a modo oscuro",
  };

  const colors = {
    easy: { main: "#16a34a", hover: "#15803d" },
    medium: { main: "#2563eb", hover: "#1d4ed8" },
    hard: { main: "#dc2626", hover: "#b91c1c" },
  };

  const levels = [
    { value: "easy", label: text.easy },
    { value: "medium", label: text.medium },
    { value: "hard", label: text.hard },
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
          p: { xs: 2, sm: 4 },
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
        <CardContent
          sx={{ p: { xs: 1, sm: 2 }, "&:last-child": { pb: 1 } }}
        >
          {/* IDIOMA Y TEMA */}
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0.5}
            sx={{ mb: 3 }}
          >
            <Button
              size="small"
              variant={language === "es" ? "contained" : "outlined"}
              onClick={() => setLanguage("es")}
              sx={{ minWidth: 44, fontWeight: 700 }}
              aria-label="Español"
            >
              ES
            </Button>

            <Button
              size="small"
              variant={language === "en" ? "contained" : "outlined"}
              onClick={() => setLanguage("en")}
              sx={{ minWidth: 44, fontWeight: 700 }}
              aria-label="English"
            >
              EN
            </Button>

            <Tooltip title={text.theme}>
              <IconButton
                onClick={toggleDarkMode}
                color="primary"
                aria-label={text.theme}
                sx={{
                  ml: 0.5,
                  border: "1px solid",
                  borderColor: "divider",
                  width: 36,
                  height: 36,
                }}
              >
                {darkMode ? (
                  <LightModeIcon fontSize="small" />
                ) : (
                  <DarkModeIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </Stack>

          {/* TÍTULO */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: "#2563eb",
              mb: 1.5,
              fontSize: { xs: "1.8rem", sm: "2.125rem" },
            }}
          >
            {text.title}
          </Typography>

          {/* PROYECTO E INSTITUTO */}
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              mb: 0.5,
              color: "text.primary",
            }}
          >
            {text.project}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: "text.secondary",
              letterSpacing: 0.3,
            }}
          >
            {text.institute}
          </Typography>

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
            {text.developed}{" "}
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
              p: { xs: 2, sm: 3 },
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
              {text.instructions}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <CheckCircleIcon
                fontSize="small"
                color="success"
                sx={{ flexShrink: 0 }}
              />
              {text.questions}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <TimerIcon
                fontSize="small"
                color="warning"
                sx={{ flexShrink: 0 }}
              />
              {text.time}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
            >
              <EmojiEventsIcon
                fontSize="small"
                color="primary"
                sx={{ flexShrink: 0 }}
              />
              {text.points}
            </Typography>
          </Stack>

          {/* SELECCIÓN DE DIFICULTAD */}
          <Stack spacing={2} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
              <BarChartIcon
                fontSize="small"
                sx={{ verticalAlign: "middle", mr: 0.5 }}
              />
              {text.difficulty}
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
                aria-label={text.difficulty}
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
                        difficulty === level.value
                          ? "#fff"
                          : "text.primary",
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

          {/* BOTÓN COMENZAR */}
          <Box mt={4}>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              onClick={onStart}
              sx={{
                px: 6,
                py: 1.8,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                "&:hover": {
                  boxShadow: "0 6px 18px rgba(37,99,235,0.35)",
                },
              }}
            >
              {text.start}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
            }

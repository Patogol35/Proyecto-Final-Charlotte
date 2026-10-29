           
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
  language = "es",
  setLanguage = () => {},
}) {
  const isEnglish = language === "en";

  const text = {
    title: isEnglish ? "Interactive Quiz" : "Quiz Interactivo",
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
    theme: isEnglish ? "Toggle theme" : "Cambiar tema",
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
            <TranslateIcon fontSize="small" color="action" />

            <Button
              size="small"
              variant={language === "es" ? "contained" : "outlined"}
              onClick={() => setLanguage("es")}
              sx={{ minWidth: 48, fontWeight: 700 }}
            >
              ES
            </Button>

            <Button
              size="small"
              variant={language === "en" ? "contained" : "outlined"}
              onClick={() => setLanguage("en")}
              sx={{ minWidth: 48, fontWeight: 700 }}
            >
              EN
            </Button>
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
              {text.title}
            </Typography>

            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              aria-label={text.theme}
              sx={{
                border: "1px solid",
                borderColor: (theme) =>
                  theme.palette.mode === "dark" ? "#f1f5f9" : "#1e293b",
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
            spacing={1}
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
              {text.instructions}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <CheckCircleIcon fontSize="small" color="success" />
              <span>{text.questions}</span>
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <TimerIcon fontSize="small" color="warning" />
              {text.time}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <EmojiEventsIcon fontSize="small" color="primary" />
              {text.points}
            </Typography>

            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <BarChartIcon fontSize="small" color="action" />
              {text.difficulty}
            </Typography>
          </Stack>

          {/* SELECCION DE DIFICULTAD */}
          <Stack spacing={2} alignItems="center">
            <Typography variant="body2" fontWeight={600}>
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
                      color: difficulty === level.value ? "#fff" : "inherit",
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
              {text.start}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
     

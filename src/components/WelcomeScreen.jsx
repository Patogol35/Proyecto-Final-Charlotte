
import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import BarChartIcon from "@mui/icons-material/BarChart";
import TimerIcon from "@mui/icons-material/Timer";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const WelcomeScreen = ({
  language,
  darkMode,
  setDarkMode,
  difficulty,
  setDifficulty,
  onStart,
}) => {
  const translations = {
    en: {
      title: "English Quiz",
      subtitle: "Test your English knowledge!",
      instructions: "Instructions",
      instruction1: "Answer a total of 20 questions, worth 0.5 points each.",
      instruction2: "You have a time limit for each question.",
      instruction3: "Earn points for each correct answer.",
      mainFeatures: "Main Features",
      feature1: "Three difficulty levels: easy, medium, and hard.",
      feature2: "A timer for each question.",
      feature3: "Interactive animations.",
      feature4: "Light mode and dark mode.",
      feature5: "Final score with personalized messages.",
      feature6: "Option to restart the quiz.",
      difficulty: "Select Difficulty",
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
      start: "Start Quiz",
    },
    es: {
      title: "Cuestionario de Inglés",
      subtitle: "¡Pon a prueba tus conocimientos de inglés!",
      instructions: "Instrucciones",
      instruction1: "Responde un total de 20 preguntas, cada una vale 0.5 puntos.",
      instruction2: "Tienes un límite de tiempo para cada pregunta.",
      instruction3: "Gana puntos por cada respuesta correcta.",
      mainFeatures: "Características principales",
      feature1: "Tres niveles de dificultad: fácil, medio y difícil.",
      feature2: "Un temporizador para cada pregunta.",
      feature3: "Animaciones interactivas.",
      feature4: "Modo claro y modo oscuro.",
      feature5: "Puntuación final con mensajes personalizados.",
      feature6: "Opción para reiniciar el cuestionario.",
      difficulty: "Selecciona la dificultad",
      easy: "Fácil",
      medium: "Medio",
      hard: "Difícil",
      start: "Comenzar cuestionario",
    },
  };

  const t = translations[language] || translations.en;

  const featureIcons = [
    <BarChartIcon sx={{ color: "#16a34a" }} />,
    <TimerIcon sx={{ color: "#f59e0b" }} />,
    <AutoAwesomeIcon sx={{ color: "#a855f7" }} />,
    <DarkModeIcon sx={{ color: "#2563eb" }} />,
    <EmojiEventsIcon sx={{ color: "#eab308" }} />,
    <RestartAltIcon sx={{ color: "#06b6d4" }} />,
  ];

  const features = [
    t.feature1,
    t.feature2,
    t.feature3,
    t.feature4,
    t.feature5,
    t.feature6,
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        backgroundColor: darkMode ? "#121212" : "#f5f7fb",
        color: darkMode ? "#ffffff" : "#1e293b",
        transition: "background-color 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Header */}
        <Box textAlign="center">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {t.title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {t.subtitle}
          </Typography>

          <Button
            onClick={() => setDarkMode(!darkMode)}
            sx={{ mt: 1 }}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>
        </Box>

        {/* Instructions */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: darkMode ? "#1e293b" : "#ffffff",
            border: "1px solid",
            borderColor: darkMode ? "#334155" : "#e2e8f0",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            {t.instructions}
          </Typography>

          <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
            {[t.instruction1, t.instruction2, t.instruction3].map(
              (instruction, index) => (
                <Typography
                  component="li"
                  key={index}
                  variant="body2"
                  sx={{ mb: 1 }}
                >
                  {instruction}
                </Typography>
              )
            )}
          </Box>
        </Paper>

        {/* Main Features - Separate Section */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: darkMode ? "#1e293b" : "#ffffff",
            border: "1px solid",
            borderColor: darkMode ? "#334155" : "#e2e8f0",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            {t.mainFeatures}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    minWidth: 30,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: darkMode
                      ? "rgba(100,116,139,0.15)"
                      : "#ffffff",
                    border: "1px solid",
                    borderColor: "divider",
                    "& svg": {
                      fontSize: 18,
                    },
                  }}
                >
                  {featureIcons[index]}
                </Box>

                <Typography variant="body2">
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Difficulty */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: darkMode ? "#1e293b" : "#ffffff",
            border: "1px solid",
            borderColor: darkMode ? "#334155" : "#e2e8f0",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            {t.difficulty}
          </Typography>

          <FormControl fullWidth size="small">
            <Select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
            >
              <MenuItem value="easy">{t.easy}</MenuItem>
              <MenuItem value="medium">{t.medium}</MenuItem>
              <MenuItem value="hard">{t.hard}</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        {/* Start Button */}
        <Button
          variant="contained"
          size="large"
          onClick={onStart}
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          {t.start}
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;

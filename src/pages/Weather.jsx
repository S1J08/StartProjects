import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Город не найден");
      }

      const data = await response.json();

      if (data.list.length === 0) {
        throw new Error("Нет данных по этому городу");
      }

      // Устанавливаем данные погоды
      setWeather(data);
    } catch (error) {
      // Обрабатываем ошибку и показываем её
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      fetchWeather();
    }
  }

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <TextField
        fullWidth
        label="Введите город"
        id="fullWidth"
        onKeyDown={handleKeyDown}
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <Button variant="outlined" onClick={fetchWeather}>
        Узнать погоду
      </Button>
      {weather && (
        <>
          <p>Погода:{weather.list[0].main.temp.toFixed(0)}</p>
          <p>Ветер: {weather.list[0].wind.speed} м/с </p>
        </>
      )}
      {error && <p>Такого города нет</p>}
      {loading && <p>Загрузка ...</p>}
    </div>
  );
};
export default Weather;

import Input from "../components/Ui/Input/Input";
import Button from "../components/Ui/Button/Button";
// import { useState } from "react";

const Weather = () => {
  // const [city, setCity] = useState('');
  // const [weather, setWeather] = useState(null);
  // const [error, setError] = useState('');

  // const apiKey = "c29962f48c1db31106d0f2f856c04611";

    

  return (
    <div>
      <h1>Прогноз погоды</h1>
      <Input />
      <Button>Узнать погоду</Button>
    </div>
  );
};
export default Weather;

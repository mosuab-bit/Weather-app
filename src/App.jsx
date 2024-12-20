import "./App.css";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import moment from "moment/min/moment-with-locales";
import axios from "axios";
import "moment/locale/ar";
import { useTranslation } from "react-i18next";
const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});
let cancelAxios = null;

function App() {
  const { t, i18n } = useTranslation();

  const [locale, setLocale] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [temp, setTemp] = useState({
    number: null,
    max: null,
    min: null,
    description: "",
    icon: "",
  });
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=31.963158&lon=35.930359&appid=f11f4394548b73573c3c5d5c50b244f3",
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        const responseTemp = Math.round(response.data.main.temp - 273.15);
        const min = Math.round(response.data.main.temp_min - 273.15);
        const max = Math.round(response.data.main.temp_max - 273.15);
        const description = response.data.weather[0].description;
        const icon = response.data.weather[0].icon;
        setTemp({
          number: responseTemp,
          max,
          min,
          description,
          icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      cancelAxios();
    };
  }, []);

  function handleTranslateClick() {
    const newLocale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
    moment.locale(newLocale);
    setDateAndTime(
      moment().locale(newLocale).format("MMMM Do YYYY, h:mm:ss a")
    );
  }
  console.log(t("min")); // Should print "الصغرى" in Arabic locale
  console.log(t("max")); // Should print "العظمى" in Arabic locale

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* CONTAINER */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* CARD */}
            <div
              style={{
                background: "rgb(28 52 91 /36%",
                color: "white",
                padding: "10px",
                boxShadow: "0 11px 1px rgba(0, 0 ,0 ,0.05)",
                width: "100%",
              }}
              dir={locale == "ar" ? "rtl" : "ltr"}
            >
              {/* CONTENT */}
              <div>
                {/* CITY & TIME */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir={locale == "ar" ? "rtl" : "ltr"}
                >
                  <Typography
                    variant="h1"
                    style={{ marginRight: "20px", fontWeight: "600" }}
                  >
                    {t("jordan")}
                  </Typography>
                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    {dateAndTime}
                  </Typography>
                </div>
                {/*== CITY & TIME ==*/}
                <hr />
                {/* CONTAINER OF DEGREE + CLOUD ICON */}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* DEGREE & DESCRIPTION */}
                  <div>
                    {/* TEMP */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {temp.number}
                      </Typography>

                      <img src={temp.icon} />
                    </div>
                    {/*== TEMP ==*/}

                    <Typography variant="h6" style={{ textAlign: "right" }}>
                      {t(temp.description)}
                    </Typography>

                    {/* MIN & MAX */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <h5>
                        {t("min")}:{temp.min}
                      </h5>
                      <h5 style={{ margin: "0 10px" }}>|</h5>
                      <h5>
                        {t("max")}:{temp.max}
                      </h5>
                    </div>
                    {/*== MIN & MAX ==*/}
                  </div>
                  {/*== DEGREE & DESCRIPTION ==*/}
                  <CloudIcon style={{ fontSize: "200px" }} />
                </div>
              </div>
              {/*== CONTAINER OF DEGREE + CLOUD ICON ==*/}

              {/*== CONTENT ==*/}
            </div>

            {/*== CARD ==*/}
          </div>
          {/*== CONTAINER ==*/}
          <Button
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white",
              marginTop: "-300px",
            }}
            onClick={handleTranslateClick}
          >
            {locale == "ar" ? "Arabic" : "انجليزي"}
          </Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

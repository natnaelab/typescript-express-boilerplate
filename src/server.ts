import app from "./app";
import { PORT } from "./utils/constants";

app.listen(PORT, () => {
   console.log("server listening to port " + PORT);
});

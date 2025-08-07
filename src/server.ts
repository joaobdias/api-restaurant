import express from "express"
import { routes } from "./routes" // call index.ts by default
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()
app.use(express.json()) //  // specify communication data type to JSON

// server.ts -> index.ts -> products-routes/other routes -> controller to route

app.use(routes)

app.use(errorHandling) // come here after the next(error)

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)) // initializing server
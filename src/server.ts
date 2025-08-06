import express from "express"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

// server.ts -> index.ts -> products-routes/other routes -> controller to route

const PORT = 3333
const app = express()

app.use(express.json()) // specify communication data type to JSON

app.use(routes)



app.use(errorHandling)
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)) // initializing server
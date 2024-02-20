package main

import (
	"os"

	"github.com/NotNoss/Go-Solid-Boilerplate/initializers"
	"github.com/NotNoss/Go-Solid-Boilerplate/middleware"
	"github.com/gofiber/fiber/v2"
)

func init() {
	initializers.LoadEnvVariables()
	// initializers.ConnectToDatabase()
	// initializers.SyncDB()
}

func main() {
	// Setup app
	app := fiber.New(fiber.Config{})

	// Configure app
	app.Use(middleware.RequireAuth)
	middleware.CORS(app)

	// Endpoints
	Endpoints(app)

	// Start app
    app.Listen(":" + os.Getenv("PORT"))
}
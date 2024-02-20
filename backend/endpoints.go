package main

import (


	"github.com/gofiber/fiber/v2"
)

func Endpoints(app *fiber.App) {
	// Get
	app.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"status": 200,
			"detail": "OK",
		})
	})
}
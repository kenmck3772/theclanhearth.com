SHELL := /bin/bash

.PHONY: install dev build-css build preview clean

install:
	@echo "Installing dependencies..."
	npm ci

dev:
	@echo "Starting dev server..."
	npm run dev

build-css:
	@echo "Building production CSS..."
	npm run build:css:prod

build:
	@echo "Running full build..."
	npm run build

preview:
	@echo "Starting preview..."
	npm run preview

clean:
	@echo "Cleaning generated files..."
	rm -rf css/style.css css/style.min.css node_modules

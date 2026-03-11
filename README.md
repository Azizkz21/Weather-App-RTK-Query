# Weather App

A responsive weather application built as a solution to the Frontend Mentor Weather App challenge.  
The app allows users to search for cities, view current weather conditions, switch between measurement units, and explore hourly forecast data in a clean and user-friendly interface.

## Overview

This project was created to practice building a modern frontend application with React, TypeScript, Redux Toolkit, and RTK Query.  
It focuses on real API integration, state management, reusable UI components, and responsive layout implementation.

The application provides weather information for selected cities and lets users customize how the data is displayed by changing temperature, wind speed, and precipitation units.

## Tech Stack

- React
- TypeScript
- Vite
- Redux Toolkit
- RTK Query
- Tailwind CSS

## Features

- Search for cities with dropdown suggestions
- Show up to 5 matching city results
- Display country name together with city name in search results
- View current weather conditions for the selected city
- Display temperature, wind speed, and "feels like" temperature
- Switch temperature units between **Celsius** and **Fahrenheit**
- Switch wind speed units between **km/h** and **mph**
- Switch precipitation units between **mm** and **inch**
- Browse forecast data by day
- View hourly forecast for the selected day
- Responsive interface for different screen sizes
- API data fetching and caching with RTK Query
- Global state management with Redux Toolkit

## How It Works

### 1. City Search

Users can type a city name into the search field.  
The application sends a request to the geocoding API and shows a dropdown list with up to 5 matching cities.  
Each result includes the city name and country name, making it easier to choose the correct location.

### 2. Selecting a City

After selecting a city, the app loads weather data for that location using its coordinates.  
The interface updates dynamically and displays the corresponding weather information.

### 3. Current Weather

The main weather section shows the most important current conditions, including:

- current temperature
- wind speed
- feels like temperature

### 4. Units Switching

The application includes a units panel that allows users to customize how weather data is displayed.

Available unit options:

- **Temperature:** Celsius / Fahrenheit
- **Wind Speed:** km/h / mph
- **Precipitation:** mm / inch

When the user changes a unit, the weather data updates accordingly.

### 5. Hourly Forecast by Day

The forecast section allows the user to switch between available days and view hourly weather data for the selected date.  
By default, the first available day is shown, and users can open the dropdown to choose another day from the forecast range.

## Project Structure

The interface is divided into several main parts:

- **Search** — city search input and dropdown results
- **Units** — controls for temperature, wind speed, and precipitation units
- **Weather Banner / Hero Section** — main current weather display
- **Hourly Forecast** — forecast list filtered by selected day

This structure helps keep the code modular and easier to maintain.

## What I Practiced

With this project, I practiced:

- working with external APIs
- handling asynchronous data
- building reusable React components
- managing application state with Redux Toolkit
- fetching and caching API data with RTK Query
- creating responsive layouts with Tailwind CSS
- working with TypeScript in a real-world React project
- improving UI interaction such as dropdowns and unit switching

## Run Locally

```bash
npm install
npm run dev
```

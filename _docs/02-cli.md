# Angular CLI

## Create workspace
npx -p @angular/cli ng new ucib --

npx -p @angular/cli ng new ucib --directory=ucib-dir

npx -p @angular/cli ng new ucib --directory=ucib --create-application=false --force

## Shell App
npx ng generate 

## Create application
npx -p @angular/cli ng generate application myDev-app
npx ng generate application myWork-app

## Create library
npx -p @angular/cli ng generate application myDev-app

## Serve

npx ng serve --project="myDev-app" 
npx ng serve --project="myDev-app" --port=4300

## Generate

npx ng generate component pages/home-page --project="myDev-app"
npx ng generate component pages/test-page --project="myDev-app"

npx ng generate component pages/home-page --project="myWork-app"
npx ng generate component pages/work-page --project="myWork-app"


npx ng generate library foo-lib

https://www.angulararchitects.io/en/blog/routing-and-lazy-loading-with-standalone-components/

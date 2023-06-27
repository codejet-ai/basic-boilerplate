![Codejet](./logo.svg)
# This is basic React project to test exported code from [Codejet](https://app.codejet.ai/) 

## How to run this project
1. Install dependencies: `npm install`
2. Run project: `npm start`

## How to run script to move files from Downloads to src automatically
1. Install fswatch: `brew install fswatch` (MacOS) or `sudo apt-get install fswatch` (Linux) or `choco install fswatch` (Windows)
2. Open file `start.sh` and edit path to your Downloads folder
3. Source script file: `source start.sh`
4. You should remove all files called `Codejet` from Downloads folder before running script for the first time
5. Run script: `syncWithDownloads`

Now file `Codejet.zip` will be moved and unzipped to `src` folder every time you save it in Downloads folder.


# Codejet - Basic Boilerplate

This is basic React project based on Create React App to test code exported from [Codejet](https://app.codejet.ai/)


![Logo Codejet](https://raw.githubusercontent.com/codejet-ai/basic-boilerplate/main/logo.svg)

## Table of contents
- [Table of contents](#table-of-contents)
- [How to start work with Codejet Basic Boilerplate](#how-to-start-work-with-codejet-basic-boilerplate)
- [How to run this project (Description for Novices)](#how-to-run-this-project-description-for-novices)
- [How to run script to move files from Downloads to src automatically (Only for Advanced User)](#how-to-run-script-to-move-files-from-downloads-to-src-automatically-only-for-advanced-user)
- [Links](#links)


## How to start work with Codejet Basic Boilerplate

This boilerplate is based on [Create React App](https://create-react-app.dev/).

Our goal was to make it as simple as possible for all users to get started.

To set up the boilerplate, follow these steps:

1. Download the `Codejet_generated_code.zip` file.
2. Unzip the file.
3. Move the `components` and `pages` directories to the `src` directory located in the root of the Codejet - Basic Boilerplate.

Now you are ready to start using the Codejet - Basic Boilerplate for your React projects.

Please note that this boilerplate is designed to provide a straightforward foundation for React development, and we encourage you to explore and expand upon it to suit your specific needs.

For more information and detailed instructions, please refer to the [documentation](https://docs.codejet.ai/).

Happy coding!

## How to run this project (Description for Novices)
To run this project locally, you will need Node.js and npm (Node Package Manager) installed on your machine. If you don't have them installed, you can download and install them from the [official Node.js website](https://nodejs.org/en).

Once you have Node.js, follow these steps:
1. Download the project repository from GitHub by visiting the following link: [Codejet - Basic Boilerplate GitHub Repository](https://github.com/codejet-ai/basic-boilerplate) or simply clone the repository to your local machine using the following command in the terminal:
   
       git clone https://github.com/codejet-ai/basic-boilerplate.git

2. Open a terminal or command prompt and navigate to the root of the downloaded project folder (`basic-boilerplate`).
3. Change your current directory to the `basic-boilerplate` root directory.
4. Install the project dependencies by running the following command:
    
       npm install

5. After the installation is complete, start the development server with the following command:

       npm start

6. The development server will compile the code and open the application in your default web browser at
 
       http://localhost:3000/

Now you can explore and modify the Codejet - Basic Boilerplate to build your React projects.

Please note that this boilerplate is designed to provide a straightforward foundation for React development, and we encourage you to explore and expand upon it to suit your specific needs.

For more information and detailed instructions, please refer to the GitHub repository.

## [ADDITIONAL] How to run script to move files from Downloads to src automatically (Only for Advanced Users)
It is not necessary to run it automatically - you can have it executed manually.

1. Install fswatch: `brew install fswatch` (MacOS) or `sudo apt-get install fswatch` (Linux - Debian based) or `choco install fswatch` (Windows)
2. Open file `start.sh` and edit path to your Downloads folder
3. Source script file: `source start.sh`
4. You should remove all files called `Codejet_generated_code.zip` from Downloads folder before running script for the first time
5. Run script: `syncWithDownloads`
6. Now file `Codejet_generated_code.zip` will be moved and unzipped to src folder every time you save it in Downloads folder.

## Links

* [Documentation](https://docs.codejet.ai/)
* [Codejet Components @Figma Community](https://www.figma.com/community/file/1241029131856106957/Codejet-Components)
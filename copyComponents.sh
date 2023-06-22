# path to project / change it
pathToProject=~/Projects/basic-boilerplate/
fileName="Codejet_generated_code"
zipFileName="$fileName.zip"
# if CodejetApp.zip not exists in downloads stop script
if [ ! -f ~/Downloads/$zipFileName ]; then
    echo "CodejetApp.zip not found in downloads"
    exit 1
fi
# copy file from downloads
mv ~/Downloads/$zipFileName $pathToProject

# unzip file
unzip -o $zipFileName
# remove old file
rm $zipFileName
# if src/components and src/pages exists remove it
# remove old file
rm -rf src/{components,pages}

# copy file to src
mv $fileName/* src/
# remove old folder
rm -r $fileName

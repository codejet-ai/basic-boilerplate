# path to project / change it
pathToProject=~/Projects/js/codejet-test-components/

# if CodejetApp.zip not exists in downloads stop script
if [ ! -f ~/Downloads/CodejetApp.zip ]; then
    echo "CodejetApp.zip not found in downloads"
    exit 1
fi
# copy file from downloads
mv ~/Downloads/CodejetApp.zip $pathToProject
unzip -o CodejetApp.zip
# remove old file
rm CodejetApp.zip
# if src/FRAME_0 exists remove it
# remove old file
rm -rf src/FRAME_0
# copy file to src
mv CodejetApp/* src/
# remove old folder
rm -r CodejetApp

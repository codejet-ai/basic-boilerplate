syncWithDownloads(){
  fswatch -o ~/Downloads | xargs -n1 -I{} ./copyComponents.sh
}
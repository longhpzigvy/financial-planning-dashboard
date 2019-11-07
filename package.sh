if ! [ -x "$(command -v zip)" ]; then
  echo 'Error: zip command is required' >&2
  exit 1
fi

rm -rf ./build
rm -f ./dist/build.zip
npm run build
mkdir -p \dist
cd ./build || return
zip -qr ../dist/build ./*

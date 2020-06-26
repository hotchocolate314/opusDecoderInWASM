Run:
```
./setupEmsdkOpus.sh
```
To download and configure emsdk and opus correctly, and then run:
```
./compile.sh
```
To compile main.c to produce main.wasm and main.js, in the static folder.

The file static/assets/index.js has code to play interleaved PCM using the WebAudio API.

The requirements for this to work are that you provide some method to get Ogg pages of Opus audio (see RFC 3533, RFC 6716 and RFC 7845).

If you provide 2 Ogg pages as input to the program (say the Nth and N-1th pages of some file), then they will be decoded such that if they are played sequentially there will be no glitching/clicking sound between them.

Then to actually server the files, just do `yarn` or whatever to get the stuff installed, and then do `node server.js`, and then navigate to `localhost:3000` to see it working, and just press `Play Music` to start it.

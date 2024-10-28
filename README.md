# EdgeTTSClient

A TypeScript-based client for interacting with Microsoft Edge's Text-to-Speech (TTS) API. This package is compatible with both **Node.js** and **browser environments**, making it versatile for various use cases.

## Features
- 🎙️ **Text-to-Speech**: Synthesize speech from text using Microsoft's Edge TTS API.
- 🌐 **Cross-Platform**: Works in both Node.js and the browser.
- 📦 **TypeScript Support**: Includes complete TypeScript definitions.
- 🔊 **Audio Streaming**: Supports real-time streaming of audio chunks.

## Installation

To install the package, run:

```bash
npm install edge-tts-client
```

## Usage

### Basic Example

```typescript
import { EdgeTTSClient, ProsodyOptions, OUTPUT_FORMAT } from 'edge-tts-client';

// Initialize the client
const ttsClient = new EdgeTTSClient();

// Set metadata for synthesis
await ttsClient.setMetadata('en-US-GuyNeural', OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

// Define SSML options
const options = new ProsodyOptions();
options.pitch = 'medium';
options.rate = 1.2;
options.volume = 90;

// Synthesize text to a stream
const stream = ttsClient.toStream('Hello, world!', options);

// Handle the audio stream
stream.on('data', (audioChunk) => {
    console.log('Received audio chunk:', audioChunk);
});

stream.on('end', () => {
    console.log('Synthesis complete.');
});
```

## API

### `EdgeTTSClient`
The main class for interacting with Edge TTS.

#### Methods

- **`setMetadata(voiceName: string, outputFormat: OUTPUT_FORMAT, voiceLocale?: string): Promise<void>`**
  - Sets the voice, format, and locale for TTS synthesis.

- **`toStream(input: string, options?: ProsodyOptions): EventEmitter`**
  - Converts text to a stream of audio chunks.

- **`close(): void`**
  - Closes the WebSocket connection.

### `ProsodyOptions`
Defines the prosody options for SSML synthesis:
- **`pitch`**: Pitch of the voice (e.g., `'medium'`, `'high'`).
- **`rate`**: Speed of the speech (e.g., `1.0`, `1.2`).
- **`volume`**: Volume of the audio (e.g., `90`, `'loud'`).

### `OUTPUT_FORMAT`
An enum defining the available output formats, such as:
- `AUDIO_24KHZ_48KBITRATE_MONO_MP3`
- `WEBM_24KHZ_16BIT_MONO_OPUS`

## Development

### Build
To build the project, run:

```bash
npm run build
```

### Test
To run tests with Vitest:

```bash
npm run test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

MIT License

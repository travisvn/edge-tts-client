import { describe, expect, test, beforeEach } from 'vitest';
import { EdgeTTSClient, ProsodyOptions } from '../src/edge-tts-client';
import { OUTPUT_FORMAT } from '../src/constants';

describe('EdgeTTSClient', () => {
  let ttsClient: EdgeTTSClient;

  beforeEach(() => {
    ttsClient = new EdgeTTSClient(false); // Disable logging for tests
  });

  test('should set metadata correctly', async () => {
    const voiceName = 'en-US-GuyNeural';
    const outputFormat = OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3;

    await ttsClient.setMetadata(voiceName, outputFormat);

    expect(ttsClient['voice']).toBe(voiceName);
    expect(ttsClient['outputFormat']).toBe(outputFormat);
    expect(ttsClient['voiceLocale']).toBe('en-US');
  });

  test('should build SSML correctly', () => {
    const inputText = 'Hello, world!';
    const options = new ProsodyOptions();
    options.pitch = 'medium';
    options.rate = '1.2';
    options.volume = '90';

    const ssml = ttsClient['buildSSML'](inputText, options);

    expect(ssml).toContain(`<speak version="1.0"`);
    expect(ssml).toContain(`<voice name="${ttsClient['voice']}">`);
    expect(ssml).toContain(`<prosody pitch="${options.pitch}" rate="${options.rate}" volume="${options.volume}">`);
    expect(ssml).toContain(inputText);
  });
});

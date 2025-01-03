interface VoiceflowChat {
  load: (config: any) => void;
}

interface Voiceflow {
  chat: VoiceflowChat;
}

interface Window {
  voiceflow?: Voiceflow;
}

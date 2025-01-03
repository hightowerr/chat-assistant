interface VoiceflowConfig {
  verify?: boolean;
  token?: string;
  versionID?: string;
  environment?: string;
  userID?: string;
  sessionID?: string;
  launch?: boolean;
}

interface VoiceflowChat {
  load: (config: VoiceflowConfig) => void;
}

interface Voiceflow {
  chat: VoiceflowChat;
}

interface Window {
  voiceflow?: Voiceflow;
}

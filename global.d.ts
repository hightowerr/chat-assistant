interface VoiceflowConfig {
  verify: {
    projectID: string;
  };
  url: string;
  versionID: string;
}

interface Window {
  voiceflow: {
    chat: {
      load: (config: VoiceflowConfig) => void;
    };
  };
}

export interface StartGameProps {
  theme: string;
  setTheme: (theme: string) => void;
  players: number;
  setPlayers: (players: number) => void;
  size: string;
  setSize: (size: string) => void;
  setPath: (path: string) => void;
}

export interface GameModeProps {
  path: string;
  setPath: (path: string) => void;
  cards: string[];
  setCards: (cards: string[]) => void;
  flippedCards: number[];
  setFlippedCards: (flippedCards: number[]) => void;
  matchedCards: number[];
  setMatchedCards: (matchedCards: number[]) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
  startTime: number;
  setStartTime: (startTime: number) => void;
  endTime: number;
  setEndTime: (endTime: number) => void;
  elapsedTime: string;
  setElapsedTime: (elapsedTime: string) => void;
  count: number;
  setCount: (count: number) => void;
  done: boolean;
  setDone: (done: boolean) => void;
  size?: string;
  bigCards?: string[];
  setBigCards?: (bigCards: string[]) => void;
}

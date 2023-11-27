import { RecommendedSongsResponseType } from "../../services/requests/getRecommendedSongs";

import {
  Overlay,
  ModalContent,
  Text,
  Button,
  Title,
  ResultContainer,
  TextBold,
  PlaylistContainer,
  TextContainer,
} from "./styles";

interface ResultModalProps {
  recommendedSongs: RecommendedSongsResponseType;
  setResultModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResultModal({
  recommendedSongs,
  setResultModalVisibility,
}: ResultModalProps) {
  return (
    <Overlay onClick={() => setResultModalVisibility(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>Parabéns! Você encontrou sua playlist ideal!</Title>
        <ResultContainer>
          <PlaylistContainer>
            <TextBold>Playlist recomendada: </TextBold>
            {recommendedSongs.playlist.map((song) => (
              <Text key={song}>{song}</Text>
            ))}
          </PlaylistContainer>
          <TextContainer>
            <TextBold>Versão do aplicativo: </TextBold>
            <Text>{recommendedSongs.version}</Text>
          </TextContainer>
          <TextContainer>
            <TextBold>Data de geração do modelo: </TextBold>
            <Text>{recommendedSongs.model_date}</Text>
          </TextContainer>
        </ResultContainer>
        <Button onClick={() => setResultModalVisibility(false)}>Fechar</Button>
      </ModalContent>
    </Overlay>
  );
}

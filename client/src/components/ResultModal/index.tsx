import { RecommendedSongsResponseType } from "../../services/requests/getRecommendedSongs";

import {
  Overlay,
  ModalContent,
  Text,
  Button,
  Title,
  ResultContainer,
  TextBold,
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
    <Overlay>
      <ModalContent>
        <Title>Parabéns! Você encontrou sua playlist ideal!</Title>
        <ResultContainer>
          <TextContainer>
            <TextBold>Playlist recomendada: </TextBold>
            <Text>{recommendedSongs.playlist.join(", ")}</Text>
          </TextContainer>
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

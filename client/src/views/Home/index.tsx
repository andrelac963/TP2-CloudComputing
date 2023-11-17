import { useState } from "react";

import { Loading } from "../../components/Loading";
import { Alert } from "../../components/Alert";
import { ResultModal } from "../../components/ResultModal";

import { getRecommendedSongs } from "../../services/requests/getRecommendedSongs";
import { InputSongsType } from "../../services/requests/getRecommendedSongs";
import { RecommendedSongsResponseType } from "../../services/requests/getRecommendedSongs";

import {
  Container,
  Content,
  Title,
  Form,
  FormContainer,
  InputContainer,
  Label,
  Input,
  ButtonContainer,
  Button,
  SongListContainer,
  SongList,
} from "./styles";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [resultModalVisibility, setResultModalVisibility] = useState(false);

  const [songName, setSongName] = useState("");

  async function addSong(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (songName === "") {
      setAlertMessage("O nome da música não pode ser vazio.");
      setAlertVisibility(true);
      return;
    }

    setInputSongs((prevState) => ({
      songs: [...prevState.songs, songName],
    }));

    setSongName("");
  }

  const [inputSongs, setInputSongs] = useState<InputSongsType>({
    songs: [],
  });

  const [recommendedSongs, setRecommendedSongs] =
    useState<RecommendedSongsResponseType>();

  async function handleRecommendedSongs() {
    try {
      setIsLoading(true);

      const response = await getRecommendedSongs(inputSongs);

      setRecommendedSongs(response);

      setResultModalVisibility(true);

      setInputSongs({ songs: [] });
    } catch (err: any) {
      setAlertMessage(err.response.data.error);
      setAlertVisibility(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Title>Consulta de músicas recomendadas</Title>

          <Form onSubmit={addSong}>
            <FormContainer>
              <InputContainer>
                <Label>Adicionar uma música</Label>
                <Input
                  value={songName}
                  onChange={(event) => setSongName(event.target.value)}
                  placeholder="Nome da música"
                  type="text"
                  max-length="20"
                  aria-label="Nome da música"
                />
              </InputContainer>
              <ButtonContainer>
                <Button type="submit">Adicionar</Button>
              </ButtonContainer>
            </FormContainer>
            <FormContainer>
              <SongListContainer>
                <SongList>
                  {inputSongs.songs.map((song, index) => (
                    <li key={index}>{song}</li>
                  ))}
                </SongList>
              </SongListContainer>
              <ButtonContainer>
                <Button
                  type="button"
                  onClick={() => {
                    handleRecommendedSongs();
                  }}
                >
                  Enviar
                </Button>
              </ButtonContainer>
            </FormContainer>
          </Form>
        </Content>
      </Container>
      {isLoading && <Loading />}
      {alertVisibility && (
        <Alert message={alertMessage} setAlertVisibility={setAlertVisibility} />
      )}
      {resultModalVisibility && (
        <ResultModal
          recommendedSongs={recommendedSongs!}
          setResultModalVisibility={setResultModalVisibility}
        />
      )}
    </>
  );
}

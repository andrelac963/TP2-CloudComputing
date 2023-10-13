import { Overlay, ModalContent, Text, Button } from "./styles";

interface AlertProps {
  message: string;
  setAlertVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Alert({ message, setAlertVisibility }: AlertProps) {
  return (
    <Overlay>
      <ModalContent>
        <Text>{message}</Text>
        <Button onClick={() => setAlertVisibility(false)}>Fechar</Button>
      </ModalContent>
    </Overlay>
  );
}

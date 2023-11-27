import { Overlay, ModalContent, Text, Button } from "./styles";

interface AlertProps {
  message: string;
  setAlertVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Alert({ message, setAlertVisibility }: AlertProps) {
  return (
    <Overlay onClick={() => setAlertVisibility(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Text>{message}</Text>
        <Button onClick={() => setAlertVisibility(false)}>Fechar</Button>
      </ModalContent>
    </Overlay>
  );
}

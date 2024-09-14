import { Stack } from "expo-router";
import CadastroProduto from "./componetes/adaptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"teste"}} />
      <Stack.Screen name="Cadastro" />
    </Stack>
  );
}

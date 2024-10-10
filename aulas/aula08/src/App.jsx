import { TarefaProvider } from "./contexts/TarefaContext"
import ListTarefa from "./pages/ListTarefas"

function App() {
  return (
    <TarefaProvider>
      <ListTarefa />
    </TarefaProvider>
  )
}

export default App
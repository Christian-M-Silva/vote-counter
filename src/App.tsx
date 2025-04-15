import { VoteCounter } from "./Components/VoteCounterComponent/VoteCounterComponent"
import { DataVote } from "./interfaces/interfaces"

function App() {
  const votes: DataVote[] = [
    { nome: "Christian", startVotes: 12 },
    { nome: "João", startVotes: 11 },
    { nome: "José", startVotes: 8 },
    { nome: "Zé", startVotes: 1 },
    { nome: "Lucas", startVotes: 2 },
    { nome: "Manoel", startVotes: 3 },
  ]

  return (
    <>
      <div className="flex flex-wrap gap-2 p-2">
        {
          votes.map(el => {
            return (<VoteCounter name={el.nome} startNumberVote={el.startVotes} />
            )
          })
        }
      </div>
    </>
  )
}

export default App

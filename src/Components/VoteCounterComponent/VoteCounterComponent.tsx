import { useState } from "react"

type CountVoteProp = {
    name: string
    startNumberVote: number
}

export function VoteCounter({ name, startNumberVote }: CountVoteProp) {
    const [currentQuantityVotes, setCurrentQuantityVotes] = useState<number>(startNumberVote)

    function addVote() {
        setCurrentQuantityVotes(currentQuantityVotes + 1)
    }
    function removeVote() {
        if (currentQuantityVotes > 0) setCurrentQuantityVotes(currentQuantityVotes - 1)
    }

    return (
        <div className="grid grid-flow-row justify-items-center rounded-lg bg-sky-500/50">
            <div className="text-3xl">
                {name}
            </div>
            <span className="text-3xl">
                {currentQuantityVotes}
            </span>
            <div className="flex gap-4">
                <button className="rounded-full bg-green-900 p-3" onClick={addVote}>Adicionar votos</button>
                <button className="rounded-full bg-red-900 p-3" onClick={removeVote}>Remover votos</button>
            </div>
        </div>
    )
}
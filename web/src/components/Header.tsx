import { Plus } from "phosphor-react"
import logoImg from "../assets/habits-logo.svg"

export const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habits" />

      <button
        type="button"
        className="font-semibold border rounded-lg px-6 py-4 flex items-center gap-3 hover:border-purple-400"
      >
        <Plus className="text-white" />
        Novo hábito
      </button>
    </div>
  )
}

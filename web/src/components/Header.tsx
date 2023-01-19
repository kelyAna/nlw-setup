import { Plus, X } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

import logoImg from "../assets/habits-logo.svg"
import { NewHabitForm } from "./NewHabitForm"

export const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="font-semibold bg-violet-900 rounded-lg px-6 py-4 flex items-center gap-3 hover:bg-violet-800"
        >
          <Plus className="text-white" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

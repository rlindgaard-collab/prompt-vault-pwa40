import React from 'react'

export function PromptCard({
  id,
  text,
  onCopy,
  onToggleFav,
  fav
}: {
  id: string,
  text: string,
  onCopy: () => void,
  onToggleFav: (id: string) => void,
  fav: boolean
}) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-none hover:shadow-soft transition">
      <div className="flex items-start justify-between gap-2">
        <div className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{text}</div>
        <button
          aria-label={fav ? 'Fjern fra favoritter' : 'Tilføj til favoritter'}
          onClick={() => onToggleFav(id)}
          className={"ml-2 shrink-0 rounded-full px-2 py-1 border " + (fav ? "bg-accent text-white border-accent" : "border-slate-200 dark:border-slate-800")}
          title={fav ? 'Fjern fra favoritter' : 'Tilføj til favoritter'}
        >
          {fav ? '★' : '☆'}
        </button>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={onCopy}
          className="px-3 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-soft"
          title="Kopiér prompten"
        >
          Kopiér
        </button>
      </div>
    </div>
  )
}

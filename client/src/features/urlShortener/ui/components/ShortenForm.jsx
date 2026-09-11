
import React from 'react'
import useURLHook from '../../hooks/useURLHook'

import UrlList from './UrlList.jsx'

const ShortenForm = () => {
  const { url, setUrl, handleSubmit } = useURLHook()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-16">
      
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            ⚡ Fast & Simple URL Shortener
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Shorten Your
            <span className="text-blue-400"> URLs</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Turn long and messy URLs into short, shareable links.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-6">

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row"
          >
            {/* Input */}
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                🔗
              </span>

              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/your-long-url"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95"
            >
              Shorten URL →
            </button>
          </form>

          <p className="mt-3 px-1 text-xs text-gray-500">
            Enter a valid URL to generate your shortened link.
          </p>
        </div>

        {/* URL List */}
        <div className="mt-10 w-full">
          <UrlList />
        </div>

      </div>
    </div>
  )
}

export default ShortenForm


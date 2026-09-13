
import React, { useEffect, useState } from 'react'
import useURLHook from '../../hooks/useURLHook'

const UrlList = () => {
  const { getAllUrls, shortenedUrls, handleCopy, copiedId, handleDelete } = useURLHook()

  useEffect(() => {
    getAllUrls()
  }, [shortenedUrls])



  return (
    <div className="w-full">

      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Your Shortened URLs
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and access your shortened links
          </p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
          {shortenedUrls.length} links
        </span>
      </div>


      {shortenedUrls.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-12 text-center">
          <div className="mb-3 text-4xl">
            🔗
          </div>

          <h3 className="font-medium text-gray-300">
            No shortened URLs yet
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Your shortened links will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-3">

          {shortenedUrls.map((urlObj) => {
            const shortUrl = `${import.meta.env.VITE_FRONTEND_URL/urlObj.code}`

            return (
              <div
                key={urlObj._id}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md transition duration-200 hover:border-blue-500/30 hover:bg-white/[0.07]"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  {/* URL Information */}
                  <div className="min-w-0 flex-1">

                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                      Short URL | Created At -  {new Date(urlObj.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })} | Clicks {urlObj.clicks}
                    </p>
                      
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate text-sm font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      {shortUrl}
                    </a>

                    {/* Original URL */}
                    {urlObj.url && (
                      <p
                        className="mt-2 truncate text-xs text-gray-500"
                        title={urlObj.url}
                      >
                        Original: {urlObj.url}
                      </p>
                    )}

                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 gap-2">

                    {/* Open */}
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                      Open ↗
                    </a>

                    {/* Copy */}
                    <button
                      onClick={() => handleCopy(shortUrl, urlObj._id)}
                      className={`rounded-lg px-4 py-2 text-sm font-medium cursor-pointer transition ${copiedId === urlObj._id
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-blue-600 text-white hover:bg-blue-500'
                        }`}
                    >
                      {copiedId === urlObj._id ? '✓ Copied' : 'Copy'}
                    </button>
                    <button
                      onClick={() => handleDelete(urlObj._id)}
                      className='rounded-lg px-4 py-2 text-sm font-medium transition bg-red-500 text-white hover:bg-red-400 cursor-pointer  '
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            )
          })}

        </div>
      )}
    </div>
  )
}

export default UrlList

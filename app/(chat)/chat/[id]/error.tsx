'use client'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-screen items-center justify-center bg-[#090909]">
      <div className="text-center">
        <h2 className="text-white text-xl mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-[#89B0FF] text-black px-4 py-2 rounded-lg"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
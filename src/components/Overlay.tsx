import Nav from '@/components/Nav'

function Overlay({
  overlayOpen,
  setOverlayOpen
}: {
  overlayOpen: boolean
  setOverlayOpen: (open: boolean) => void
}) {
  if (!overlayOpen) return null
  return (
    <section className="block md:hidden fixed top-0 left-0 h-full w-full z-[100] bg-green-800 p-10">
      <div className="flex flex-col justify-between h-full">
        <Nav inverted />
        <div className="text-white flex flex-col gap-4">
          <h2 className="text-5xl leading-12">Treat yourself.</h2>
          <p>
            Find the best restaurants in your city and get it delivered to your
            place!
          </p>
        </div>
        <div className="flex flex-row w-full">
          <button
            className="w-full p-4 rounded-md border border-white text-white bg-transparent hover:bg-white hover:text-green-800 transition-all duration-300 ease-in-out text-lg"
            onClick={() => setOverlayOpen(false)}>
            Continue
          </button>
        </div>
      </div>
    </section>
  )
}

export default Overlay

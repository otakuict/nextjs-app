import Overlay from "@/components/slidOverleys/overlay";

export default function Home() {
  return (
    <div className="overlay-slide">
      <div className="bg-red-500">
        <h1>Hello world</h1>
      </div>

      <div className="content">
        <h2 className="text-black">Standing by Complete</h2>

        <button
          type="button"
          className="enter-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>
      </div>
    </div>
  );
}

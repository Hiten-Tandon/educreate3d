export default function App() {

  return (
    <div className="bg-neutral-600">
      <div className="flex-row absolute">
        <div className="border-2 border-black">
          <video width="300" height="200" controls={false} autoPlay={true}>
            <source src="video/supercoolvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="border-2 border-black">
          <video width="300" height="200" controls={false} autoPlay={true}>
            <source src="video/supercoolvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="border-2 border-black">
          <video width="300" height="200" controls={false} autoPlay={true}>
            <source src="video/supercoolvideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex-row text-center">
          <div className="text-5xl font-semibold p-2">EduCreate 3D</div>
          <div className="text-3xl p-2">Unlocking Learning Through Interactive 3D models</div>
        </div>
      </div>
    </div>
  )
}
